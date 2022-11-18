const conn = require('./conn');
const csv = require('csvtojson');
const Student = require('./Student');
const Teacher = require('./Teacher');
const Course = require('./Course');
const Section = require('./Section');
const Enrollment = require('./Enrollment');
const path = require('path');

// CSV files to sync and seed

const studentlist = path.join(__dirname, './csv/students.csv');

const courselist = path.join(__dirname, './csv/courses.csv');

const teacherlist = path.join(__dirname, './csv/teachers.csv');

const sectionlist = path.join(__dirname, './csv/sections.csv');

const enrollmentlist = path.join(__dirname, './csv/enrollments.csv');

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
Student.hasMany(Enrollment);
Enrollment.belongsTo(Student);
Enrollment.belongsTo(Section);
Section.hasMany(Enrollment);

// sync and seed using csv files

const syncAndSeed = async () => {
	await conn.sync({ force: true });
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
			id: section.id,
			coursecode: section.coursecode,
			teacherId: section.teacherId,
		});
	});

	const studentArray = await csv().fromFile(studentlist);
	studentArray.forEach(async (student) => {
		await Student.create({
			id: student.id,
			firstName: student.firstName,
			lastName: student.lastName,
			gradelevel: student.gradelevel,
		});
	});
	const enrollmentArray = await csv().fromFile(enrollmentlist);
	enrollmentArray.forEach(async (enrollment) => {
		await Enrollment.create({
			studentId: enrollment.studentId,
			sectionId: enrollment.sectionId,
		});
	});
};

module.exports = {
	syncAndSeed,
	Student,
	Teacher,
	Section,
	Course,
	Enrollment,
};
