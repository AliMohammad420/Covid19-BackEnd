"use strict";

const { covidModel } = require("../models/covid.model.js");

const covidAll = async (req, res) => {
 try {
  const data = await covidModel.findAll();
  res.status(200).json(data);
 } catch (error) {
  res.status(500).json(error);
 }
};

const deleteCovid = async (req, res, next) => {
 try {
  const data = await covidModel.destroy({
   where: {
    id: req.params.id,
   },
  });
  res.status(200).json(data);
 } catch (error) {
  res.status(500).json(error);
 }
};

const createCovid = async (req, res, next) => {
 try {
  const data = await covidModel.create(req.body);
  res.status(200).json(data);
 } catch (error) {
  res.status(500).json(error);
 }
};

module.exports = {
 covidAll,
 deleteCovid,
 createCovid,
};
