const { UUIDV4 } = require('sequelize');
const conn = require('./conn');
const { UUID, UUID4, STRING } = conn.Sequelize;

const Student = conn.define('student', {
	id: {
		type: UUID,
		primaryKey: true,
		defaultValue: UUIDV4,
	},
	firstName: {
		type: STRING,
	},
});

module.exports = Student;
