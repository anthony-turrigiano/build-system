const path = require("path");
const config = require("./config");

module.exports = {
    
    port : config.browserSync.port,
    proxy : config.host + ':' + config.port,
    ui: {
        port: config.browserSync.ui
    },
    files:["*.*"],
    reloadDelay: 250,
    socket: {
    domain: process.env.C9_HOSTNAME,
 }
};