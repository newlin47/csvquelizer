const conn = require('./conn');
const { UUID, UUID4, STRING } = conn.Sequelize;

const Student = conn.define('student', {
	id: {
		type: STRING,
		primaryKey: true,
	},
	firstName: {
		type: STRING,
	},
	lastName: {
		type: STRING,
	},
	gradelevel: {
		type: STRING,
	},
});

module.exports = Student;
