const conn = require('./conn');
const fs = require('fs');
const path = require('path');
const Student = require('./Student');

const syncAndSeed = async () => {
	await conn.sync({ force: true });
	await Promise.all([
		Student.create({ firstname: 'Ethan' }),
		Student.create({ firstname: 'Larry' }),
	]);
};

module.exports = {
	syncAndSeed,
	Student,
};
