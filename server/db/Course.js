const conn = require('./conn');
const { STRING, DECIMAL } = conn.Sequelize;

const Course = conn.define('course', {
	coursecode: {
		type: STRING,
		primaryKey: true,
	},
	coursename: {
		type: STRING,
	},
	credits: {
		type: DECIMAL,
	},
	gaf: {
		type: DECIMAL,
	},
	department: {
		type: STRING,
	},
	courselevel: {
		type: STRING,
	},
});

module.exports = Course;
