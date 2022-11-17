const conn = require('./conn');
const { STRING } = conn.Sequelize;

const Teacher = conn.define('teacher', {
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
});

module.exports = Teacher;
