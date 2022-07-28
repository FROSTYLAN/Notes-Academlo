const { User } = require('./user.model');
const { Repair } = require('./repair.model');

const initModels = () => {
  // 1 User <---> M Repair
  User.hasMany(Repair);
  Repair.belongsTo(User);
};

module.exports = { initModels };
