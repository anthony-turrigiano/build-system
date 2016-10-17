/*
 * Author : Author Name <author email>
 * Task : build:sass
 * Description : Project Description
 */
 const path = require("path");
 const config = require(path.resolve("./config"));
 const gulp = require("gulp");
 const $ = require("gulp-load-plugins")({pattern : ["*"]});

  gulp.task("build:sass", function(){
    return gulp
                .src(config.paths.sass + "/**/*.scss")  
                .pipe($.plumber())
                .pipe($.sass().on('error', $.sass.logError))
                .pipe($.size({ title: 'sass', gzip: false, showFiles: false }))
                .pipe($.plumber.stop())
                .pipe($.cached())
                .pipe(gulp.dest(config.paths.css));
 });