
 const path = require("path");
 const config = require(path.resolve("./config"));
 const gulp = require("gulp");

 gulp.task("build:dist-scripts", ["build:min-scripts"], function(){
    return gulp
                .src(config.paths.js + "/build.min.js")
                .pipe(gulp.dest(config.paths.dist.js));
});