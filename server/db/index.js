const conn = require('./conn');
const csv = require('csvtojson');
const Student = require('./Student');
const Teacher = require('./Teacher');
const Course = require('./Course');
const Section = require('./Section');

// CSV files to sync and seed

const studentlist =
	'/Users/ethannewlin/Desktop/Fullstack Senior Phase/sandbox/server/db/csv/students.csv';

const courselist =
	'/Users/ethannewlin/Desktop/Fullstack Senior Phase/sandbox/server/db/csv/courses.csv';

const teacherlist =
	'/Users/ethannewlin/Desktop/Fullstack Senior Phase/sandbox/server/db/csv/teachers.csv';

const sectionlist =
	'/Users/ethannewlin/Desktop/Fullstack Senior Phase/sandbox/server/db/csv/sections.csv';

// Use this : await csv().fromFile(csvFilePath)
// to create a json array from a CSV file

// Relationships
Teacher.hasMany(Section);
Course.hasMany(Section, { foreignKey: 'coursecode', sourceKey: 'coursecode' });
Section.belongsTo(Teacher);
Section.belongsTo(Course, {
	foreignKey: 'coursecode',
	targetKey: 'coursecode',
});

const syncAndSeed = async () => {
	await conn.sync({ force: true });
	const studentArray = await csv().fromFile(studentlist);
	studentArray.forEach(async (student) => {
		await Student.create({
			id: student.id,
			firstName: student.firstName,
			lastName: student.lastName,
			gradelevel: student.gradelevel,
		});
	});
	const courseArray = await csv().fromFile(courselist);
	courseArray.forEach(async (course) => {
		await Course.create({
			coursecode: course.coursecode,
			coursename: course.coursename,
			credits: course.credits,
			gaf: course.gaf,
			department: course.department,
			courselevel: course.courselevel,
		});
	});
	const teacherArray = await csv().fromFile(teacherlist);
	teacherArray.forEach(async (teacher) => {
		await Teacher.create({
			id: teacher.id,
			firstName: teacher.firstName,
			lastName: teacher.lastName,
		});
	});

	const sectionArray = await csv().fromFile(sectionlist);
	sectionArray.forEach(async (section) => {
		await Section.create({
			number: section.number,
			coursecode: section.coursecode,
			teacherId: section.teacherId,
		});
	});
};

module.exports = {
	syncAndSeed,
	Student,
	Teacher,
	Section,
	Course,
};
