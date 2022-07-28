const { Repair } = require('../models/repair.model');
const { User } = require('../models/user.model');
const { ref, uploadBytes, getDownloadURL } = require('firebase/storage');

// Utils
const { catchAsync } = require('../utils/catchAsync');
const { storage } = require('../utils/firebase');
const { Email } = require('../utils/email');

const getAllRepairs = catchAsync(async (req, res, next) => {
  const repairs = await Repair.findAll({
    where: { status: 'pending' },
    include: [{ model: User, attributes: { exclude: ['password'] } }],
  });

  const repairsPromises = repairs.map(async repair => {
    const imgRef = ref(storage, repair.imgPath);
    const url = await getDownloadURL(imgRef);
    repair.imgPath = url;
    return repair;
  });

  const repairsResolved = await Promise.all(repairsPromises);

  res.status(200).json({ repairs: repairsResolved });
});

const createRepairs = catchAsync(async (req, res, next) => {
  const { date, userId, computerNumber, comments } = req.body;
  const { sessionUser } = req;

  const newRepair = await Repair.create({
    date,
    userId,
    computerNumber,
    comments,
    imgPath: '',
  });

  const imgRef = ref(
    storage,
    `repairs/${newRepair.id}-${Date.now()}-${req.file.originalname}`
  ); // Libreria de id unicos - uiid
  const imgUploaded = await uploadBytes(imgRef, req.file.buffer);

  newRepair.update({ imgPath: imgUploaded.metadata.fullPath });

  await new Email(sessionUser.email).sendCreate(sessionUser.name);

  res.status(201).json({ status: 'sucess', newRepair });
});

const getRepairById = catchAsync(async (req, res, next) => {
  const { repair } = req;

  const imgRef = ref(storage, repair.imgPath);
  const url = await getDownloadURL(imgRef);

  repair.imgPath = url;

  res.status(200).json({ repair });
});

const completeRepair = catchAsync(async (req, res, next) => {
  const { repair, sessionUser } = req;
  await repair.update({ status: 'completed' });
  await new Email(sessionUser.email).sendComplete(sessionUser.name);
  res.status(200).json({ status: 'success' });
});

const deleteRepair = catchAsync(async (req, res, next) => {
  const { repair, sessionUser } = req;
  await repair.update({ status: 'cancelled' });
  await new Email(sessionUser.email).sendDelete(sessionUser.name);
  res.status(200).json({ status: 'success' });
});

module.exports = {
  getAllRepairs,
  createRepairs,
  getRepairById,
  completeRepair,
  deleteRepair,
};
