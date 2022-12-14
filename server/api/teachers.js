const express = require('express');
const app = express.Router();
const Teacher = require('../db/Teacher');

app.get('/', async (req, res, next) => {
	try {
		res.send(await Teacher.findAll());
	} catch (ex) {
		next(ex);
	}
});

module.exports = app;
