const path = require("path");
const config = require(path.resolve("./config"));
const gulp = require("gulp");
const $ = require("gulp-load-plugins")({pattern:["*"]});

gulp.task("delBuild-js", function(){
   return $.del(config.paths.js + "/build.js") ;
});
