const express = require('express');
const app = express.Router();
const Course = require('../db/Course');

app.get('/', async (req, res, next) => {
	try {
		res.send(await Course.findAll());
	} catch (ex) {
		next(ex);
	}
});

module.exports = app;
