
"use strict";

//node modules
const path = require("path");

//configuration
const config = require(path.resolve("./config"));

//express framework
const express = require("express");
const app = express();

//static files
app.use("/views", express.static(path.resolve(config.views.base) ) );
app.use("/public", express.static(path.resolve(config.paths.public) ) ) ;

//set view engine
app.set('view engine', 'pug');

//import routes
const routes = require("./routes")(app);
routes;

//export app
module.exports = app;