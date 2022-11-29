const express = require('express');
const app = express.Router();
const Project = require('../db/Project');
const Task = require('../db/Task');

app.get('/', async (req, res, next) => {
	try {
		res.send(await Project.findAll({ include: [Task] }));
	} catch (ex) {
		next(ex);
	}
});

module.exports = app;
