/*
 * Author : Author Name <author email>
 * Task : browserSync
 * Description : Project Description
 */
const path = require("path");
const config = require(path.resolve("./config"));
const gulp = require("gulp");
const $ = require("gulp-load-plugins")({pattern : ["*"]});
const bsOptions = require(path.resolve(config.browserSync.config));

gulp.task("browserSync", function(){
    $.browserSync.create();
    $.browserSync.init(bsOptions);
});