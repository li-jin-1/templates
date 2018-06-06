var express = require('express');
var router = express.Router();

//home controller
var homeController = require('../controllers/home');
router.get('/', homeController.home);
//home controller end

module.exports = router;