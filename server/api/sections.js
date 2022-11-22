const express = require('express');
const app = express.Router();
const Section = require('../db/Section');
const Enrollment = require('../db/Enrollment');
const Course = require('../db/Course');
const Student = require('../db/Student');

app.get('/', async (req, res, next) => {
	try {
		res.send(
			await Section.findAll({
				include: [Course, { model: Enrollment, include: [Student] }],
			})
		);
	} catch (ex) {
		next(ex);
	}
});

module.exports = app;
