"use strict";

module.exports = (sequelize, DataTypes) =>
 sequelize.define('covid', {
  country: {
   type: DataTypes.STRING,
   allowNull: false,
  },
  date: {
   type: DataTypes.STRING,
   allowNull: false,
  },
 });
