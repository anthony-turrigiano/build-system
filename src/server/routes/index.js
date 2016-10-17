"use strict";
module.exports = (app) =>{
  app.use("/", require("./index/route"));
};