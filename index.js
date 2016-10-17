"use strict";

const config = require("./config");
const app = require(config.server.app);
const http = require("http");
const server = http.createServer(app).listen(config.port, config.host, () =>{
    const host = server.address().address;
    const port = server.address().port;
    
    console.log("Server Listening on %s:%s", host, port);
});