"use strict";

const express = require("express");
const {
 covidAll,
 deleteCovid,
 createCovid,
} = require("../controllers/covid.controller.js");

const router = express.Router();

router.get("/covid", covidAll);
router.delete("/covid/:id", deleteCovid);
router.post("/covid", createCovid);

module.exports = router;
