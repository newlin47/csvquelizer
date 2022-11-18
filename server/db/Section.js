const conn = require('./conn');
const { STRING } = conn.Sequelize;

const Section = conn.define('section', {
	id: {
		type: STRING,
		primaryKey: true,
	},
});

module.exports = Section;
