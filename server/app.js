const express = require('express');
const app = express();
const path = require('path');

app.use('/dist', express.static(path.join(__dirname, '../dist')));
app.use('/static', express.static(path.join(__dirname, '../static')));
app.use(express.json());
app.use('/api/students', require('./api/students'));
app.use('/api/teachers', require('./api/teachers'));
app.use('/api/courses', require('./api/courses'));
app.use('/api/sections', require('./api/sections'));
app.use('/api/enrollments', require('./api/enrollments'));
app.use('/api/projects', require('./api/projects'));

app.get('/', (req, res) =>
	res.sendFile(path.join(__dirname, '../static/index.html'))
);

app.use((err, req, res, next) => {
	console.log(err);
	res.status(500).send(err);
});

module.exports = app;
