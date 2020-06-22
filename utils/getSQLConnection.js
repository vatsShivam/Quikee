const Sequelize = require('sequelize');
const dbConfig = require('../config/dbConfig');

const sequelize_connection = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
  host: dbConfig.host,
  dialect: 'mysql',
  operatorsAliases: false,
  logging: console.log
});

module.exports = sequelize_connection;