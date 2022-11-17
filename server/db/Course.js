const conn = require('./conn');
const { STRING } = conn.Sequelize;

const Course = conn.define('course', {
	code: {
		type: STRING,
		primaryKey: true,
	},
	department: {
		type: STRING,
	},
});

module.exports = Course;
