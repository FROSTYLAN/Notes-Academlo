const express = require('express');

// Controllers
const { renderIndex } = require('../controllers/view.controller');

const router = express.Router();

router.get('/', renderIndex);

module.exports = { viewsRouter: router };
