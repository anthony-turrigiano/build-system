const express = require("express");
const route = express.Router();
const controller = require("./controller");

route   
    .route("/")
    .get(controller.get);

module.exports = route;
