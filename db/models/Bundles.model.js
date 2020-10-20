const { Sequelize, DataTypes } = require('sequelize');
const db = require ('../index.js');

const Bundle = db.define(
  'logos',
  {
    id: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    logoURL: {
      type: DataTypes.STRING(101),
    },
  },
  {
    timestamps: false,
    logging: false,
  },
);

module.exports = Bundle;
