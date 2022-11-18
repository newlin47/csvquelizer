const express = require('express');
const app = express.Router();
const Enrollment = require('../db/Enrollment');
const Section = require('../db/Section');
const Student = require('../db/Student');
const Teacher = require('../db/Teacher');
const Course = require('../db/Course');

app.get('/', async (req, res, next) => {
	try {
		res.send(
			await Enrollment.findAll({
				include: [Student, { model: Section, include: [Teacher, Course] }],
			})
		);
	} catch (ex) {
		next(ex);
	}
});

module.exports = app;
