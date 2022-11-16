const conn = require('./conn');
const csv = require('csvtojson');
const Student = require('./Student');
const Teacher = require('./Teacher');

const csvFilePath =
	'/Users/ethannewlin/Desktop/fullstack senior phase/sandbox/server/db/csv/students.csv';

// Use this : await csv().fromFile(csvFilePath)
// to create a json array from a CSV file

const syncAndSeed = async () => {
	await conn.sync({ force: true });
	const jsonArray = await csv().fromFile(csvFilePath);
	jsonArray.forEach(async (student) => {
		await Student.create({ firstName: student.firstName });
	});
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
