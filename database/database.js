const Sequelize = require('sequelize');

const connection = new Sequelize('guiapress', 'root', '12345', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = connection;
