"use strict";

const express = require("express");
const app = express();
const cors = require("cors");
const { notFound } = require("./errorHandlers/404.js");
const covidRoutes = require("./routes/covid.routes.js");

app.use(cors());
app.use(express.json());
app.use(covidRoutes);

app.get("/", (req, res) => {
 res.send("Hello World!");
});

app.use("*", notFound);

function start(port) {
 app.listen(port, () => console.log(`Listening on port ${port}`));
}

module.exports = {
 app: app,
 start: start,
};
