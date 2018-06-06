const db = require('../db/database');

exports.home = function (req, res, next) {
	  res.render('home/index', { title: 'Express' });
	};