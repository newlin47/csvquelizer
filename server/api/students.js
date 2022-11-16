const express = require('express');
const app = express.Router();
const { Student } = require('../db');

app.get('/', async (req, res, next) => {
	try {
		res.send(await Student.findAll());
	} catch (ex) {
		next(ex);
	}
});

module.exports = app;
