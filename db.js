
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
  dialect: 'postgres',
  host: 'localhost'
});

module.exports = sequelize;

