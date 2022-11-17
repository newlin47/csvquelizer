const conn = require('./conn');
const { STRING, UUID, UUIDV4 } = conn.Sequelize;

const Section = conn.define('section', {
	id: {
		type: UUID,
		primaryKey: true,
		defaultValue: UUIDV4,
	},
	name: {
		type: STRING,
	},
});

module.exports = Section;
