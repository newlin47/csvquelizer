const conn = require('./conn');
const { UUID, UUIDV4 } = conn.Sequelize;

const Enrollment = conn.define('enrollment', {
	id: {
		type: UUID,
		primaryKey: true,
		defaultValue: UUIDV4,
	},
});

module.exports = Enrollment;
