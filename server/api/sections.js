const express = require('express');
const app = express.Router();
const Section = require('../db/Section');

app.get('/', async (req, res, next) => {
	try {
		res.send(await Section.findAll());
	} catch (ex) {
		next(ex);
	}
});

module.exports = app;
