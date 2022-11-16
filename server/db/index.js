const conn = require('./conn');
const fs = require('fs');
const path = require('path');
const Student = require('./Student');

const syncAndSeed = async () => {
	await conn.sync({ force: true });
	await Promise.all([
		Student.create({ firstName: 'Ethan' }),
		Student.create({ firstName: 'Larry' }),
	]);
};

module.exports = {
	syncAndSeed,
	Student,
};
