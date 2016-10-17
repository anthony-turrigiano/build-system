"use strict";

//node modules
const path = require("path");

//configuration
const config = require(path.resolve("./config"));

module.exports.get = (req, res) =>{
    
    //check to see if the engine config variable is set to html 
    let engine = config.server.engine;
    
    if(engine === 'html'){
        res.sendFile(path.resolve("./src/views/" + config.server.engine  + "/index.html"));
    } else {
        res.render(path.resolve("./src/views/" + config.server.engine  + "/index"), {title : config.project.title, author : config.project.author, description : config.project.description});    
    }
    
};