const Sequelize = require('sequelize');

const conn = new Sequelize(
	process.env.DATABASE_URL || 'postgres://localhost/sandbox_db'
);

module.exports = conn;
