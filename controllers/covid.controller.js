'use strict';

const {covidModel} = require('../models/covid.model.js');

const covidAll = async (req, res, next) => {
    try {
        const covidData = await covidModel.findAll();
        res.status(200).json(covidData);
    } catch (error) {
        next(error);
    }
};

const deleteCovid = async (req, res, next) => {
    const { id } = req.params;
    try {
        const covidData = await covidModel.destroy({ where: { id } });
        res.status(200).json("Deleted");
    } catch (error) {
        next(error);
    }
};

const createCovid = async (req, res, next) => {
    const covid = req.body;
    try {
        const covidData = await covidModel.create(covid);
        res.status(201).json("Created");
    } catch (error) {
        next(error);
    }
};

module.exports = {
    covidAll,
    deleteCovid,
    createCovid,
};




