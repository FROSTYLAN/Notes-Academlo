const express = require('express');

//Middlewares
const { repairPending } = require('../middlewares/repairs.middlewares');
const {
  createRepairValidations,
  checkValidations,
} = require('../middlewares/validations.middlewares');
const {
  userExists,
  protectToken,
  protectAdmin,
  protectAccountOwner,
} = require('../middlewares/users.middlewares');

// Controller
const {
  getAllRepairs,
  createRepairs,
  getRepairById,
  completeRepair,
  deleteRepair,
} = require('../controllers/repair.controller');

// Utils
const { upload } = require('../utils/multer');

const router = express.Router();

router.use(protectToken);

router.get('/', getAllRepairs);

router.post(
  '/',
  upload.single('imgPath'),
  createRepairValidations,
  checkValidations,
  createRepairs
);

router
  .route('/:id')
  .get(repairPending, getRepairById)
  .patch(repairPending, completeRepair)
  .delete(repairPending, deleteRepair);

module.exports = { repairsRouter: router };
