const express = require('express');
const app = express();
const path = require('path');

app.use('/dist', express.static(path.join(__dirname, '../dist')));
app.use('/static', express.static(path.join(__dirname, '../static')));
app.use('/api/students', require('./api/students'));
app.use('/api/teachers', require('./api/teachers'));
app.use('/api/courses', require('./api/courses'));

app.get('/', (req, res) =>
	res.sendFile(path.join(__dirname, '../static/index.html'))
);

app.use((err, req, res, next) => {
	console.log(err);
	res.status(500).send(err);
});

module.exports = app;
