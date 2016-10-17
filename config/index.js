"use strict";

const env = process.env.NODE_ENV = "development";

const dev = {
  hostname : "<enter url>",
  host : '0.0.0.0',
  port : 8081,
  project : {
    title : "BuildSystem",
    author : "Author Name <author email>", 
    description : "Project Description"
  },
  paths : {
    sass : "./sass",
    css : "./src/public/css",
    dist : {
      css : "./dist/public/css"
    },
    js : "./src/public/js",
    client : "./src/client",
    public : "./src/public"
  },
  server : {
      base : "./src",
      app : "./src/server/app.js",
      engine : "pug"
  },
  views : {
      base : "./src/views",
  },
  browserSync : {
    config : "./bsconfig",
    port : 8080,
    ui : 8082
    
  },
  gulp : {
    tasks : "./gulp/tasks",
    "plugins" : {
            "autoprefixer": [
                "ie >= 6",
                "ie_mob >= 6",
                "ff >= 1",
                "chrome >= 1",
                "safari >= 1",
                "opera >= 1",
                "ios >= 1",
                "android >= 1",
                "bb >= 1"
              ]
        }
  }
};

const prod = {
  host : '0.0.0.0',
  port : 8080,
  paths : {
    sass : "./sass",
    css : "./src/public/css",
    js : "./src/public/js",
    client : "./src/client",
    public : "./src/public"
  },
  server : {
      base : "./dist",
      app : "./dist/server/app.js",
      engine : "pug"
  },
  views : {
      base : "./dist/views",
  }
};

const config = env === 'development' ? dev : prod;

module.exports = config;
