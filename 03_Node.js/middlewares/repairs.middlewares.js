const { Repair } = require('../models/repair.model');

const repairPending = async (req, res, next) => {
  try {
    const { id } = req.params;

    const repair = await Repair.findOne({ where: { id } });

    if (repair.status !== 'pending') {
      return res.status(404).json({
        status: 'error',
        message: 'That repair is not pending.',
      });
    }

    req.repair = repair;
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { repairPending };
