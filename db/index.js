const Sequelize = require('sequelize');

const db = new Sequelize ('hblogo', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});

module.exports = db;
