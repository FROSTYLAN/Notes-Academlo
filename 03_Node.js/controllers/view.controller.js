//Models
const { Repair } = require('../models/repair.model');

//Utils
const { catchAsync } = require('../utils/catchAsync');

const renderIndex = catchAsync(async (req, res) => {
  const repairs = await Repair.findAll();
  res.status(200).render('index', {
    title: 'Title coming from controller',
    repairs,
  });
});

module.exports = { renderIndex };
