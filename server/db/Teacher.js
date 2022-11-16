const conn = require('./conn');
const { STRING, UUID, UUIDV4, TEXT } = conn.Sequelize;

const Teacher = conn.define('teacher', {
	id: {
		type: UUID,
		primaryKey: true,
		defaultValue: UUIDV4,
	},
	firstName: {
		type: STRING,
	},
});

module.exports = Teacher;
