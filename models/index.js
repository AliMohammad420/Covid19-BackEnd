"use strict";

const { Sequelize, DataTypes } = require("sequelize");
const covid = require("./covid.model.js");

const POSTGRES_URL =
 process.env.DATABASE_URL || "postgres://covid_8mlc_user:J8e89WpOnnYRmdk9FVMjmNPTtchPZ9PN@dpg-cg48nqfdvk4st7254vn0-a.frankfurt-postgres.render.com/covid_8mlc";

const sequelizeOption = {
 dialectOptions: {
  ssl: {
   require: true,
   rejectUnauthorized: false,
  },
 },
};

const sequelize = new Sequelize(POSTGRES_URL, sequelizeOption);

const covidModel = covid(sequelize, DataTypes);

module.exports = {
 db: sequelize,
 covidModel
};
