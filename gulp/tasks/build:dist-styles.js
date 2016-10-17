/*
 * Author : Author Name <author email>
 * Task : build:dist-styles
 * Description : Project Description
 */

 const path = require("path");
 const config = require(path.resolve("./config"));
 const gulp = require("gulp");

 gulp.task("build:dist-styles", ["build:min-styles"], function(){
    return gulp
                .src(config.paths.css + "/style.min.css")
                .pipe(gulp.dest(config.paths.dist.css));
});