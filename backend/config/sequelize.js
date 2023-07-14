const { Sequelize } = require('sequelize');
const environment = process.env.NODE_ENV || 'development';
const config = require('../sequelizefile.js')[environment];

const sequelize = new Sequelize(config.connection, {
  dialect: config.client,
  logging: false
});

module.exports = sequelize;
