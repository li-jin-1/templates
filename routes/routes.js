const express = require('express');
const router = express.Router();

//home controller
const homeController = require('../controllers/home');
router.get('/', homeController.home);
//home controller end

//member controller
const memberController = require('../controllers/members');
router.get('/signup', memberController.singup);
//member controller end

module.exports = router;