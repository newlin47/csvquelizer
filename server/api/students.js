const express = require('express');
const app = express.Router();
const Student = require('../db/Student');

app.get('/', async (req, res, next) => {
	try {
		res.send(await Student.findAll());
	} catch (ex) {
		next(ex);
	}
});

app.post('/', async (req, res, next) => {
	try {
		const studentArray = await req.body;
		const newStudents = await Student.bulkCreate(studentArray);
		res.status(201).send(newStudents);
	} catch (ex) {
		next(ex);
	}
});

module.exports = app;
