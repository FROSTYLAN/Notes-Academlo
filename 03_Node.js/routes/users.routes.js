const express = require('express');

//Middlewares
const {
  userExists,
  protectToken,
  protectAdmin,
  protectAccountOwner,
} = require('../middlewares/users.middlewares');
const {
  createUserValidations,
  checkValidations,
} = require('../middlewares/validations.middlewares');

// Controller
const {
  getAllUsers,
  createUsers,
  getUserById,
  updateUser,
  deleteUser,
  login,
} = require('../controllers/user.controller');

const router = express.Router();

router.post('/', createUserValidations, checkValidations, createUsers);
router.post('/login', login);

// Apply protect token middleware
router.use(protectToken);

router.get('/', protectAdmin, getAllUsers);
router.route('/').get(getAllUsers).post(createUsers);

router
  .route('/:id')
  .get(protectAdmin, userExists, getUserById)
  .patch(protectAdmin, userExists, protectAccountOwner, updateUser)
  .delete(protectAdmin, userExists, protectAccountOwner, deleteUser);

module.exports = { usersRouter: router };
