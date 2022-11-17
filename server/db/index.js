const conn = require('./conn');
const csv = require('csvtojson');
const Student = require('./Student');
const Teacher = require('./Teacher');
const Faker = require('@faker-js/faker');

const csvFilePath =
	'/Users/admin/Desktop/Senior Phase/sandbox/server/db/csv/students.csv';

// Use this : await csv().fromFile(csvFilePath)
// to create a json array from a CSV file

const syncAndSeed = async () => {
	await conn.sync({ force: true });
	const jsonArray = await csv().fromFile(csvFilePath);
	jsonArray.forEach(async (student) => {
		await Student.create({
			id: student.id,
			firstName: student.firstName,
			lastName: student.lastName,
			gradelevel: student.gradelevel,
		});
	});

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
