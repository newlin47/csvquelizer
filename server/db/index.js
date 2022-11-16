const conn = require('./conn');
const fs = require('fs');
const path = require('path');
const Student = require('./Student');
const Teacher = require('./Teacher');

const syncAndSeed = async () => {
	await conn.sync({ force: true });
	await Promise.all([
		Student.create({ firstName: 'Ethan' }),
		Student.create({ firstName: 'Larry' }),
	]);
	const [maria, anisha] = await Promise.all([
		Teacher.create({ firstName: 'Maria' }),
		Teacher.create({ firstName: 'Anisha' }),
	]);
	return { teachers: { maria, anisha } };
};

module.exports = {
	syncAndSeed,
	Student,
	Teacher,
};
