const { UUID, UUIDV4 } = require('sequelize');
const conn = require('./conn');
const { STRING, INTEGER } = conn.Sequelize;

const Enrollment = conn.define('enrollment', {
	id: {
		type: UUID,
		primaryKey: true,
		defaultValue: UUIDV4,
	},
	mark: {
		type: INTEGER,
	},
});

module.exports = Enrollment;
