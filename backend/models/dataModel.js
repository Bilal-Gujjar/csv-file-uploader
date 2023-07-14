const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Data = sequelize.define('Data', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  name: DataTypes.STRING,
  contact: DataTypes.STRING
}, {
  timestamps: false
});

module.exports = Data;
