/*
 * Author : Author Name <author email>
 * Task : appendHeader
 * Description : Project Description
 */
"use strict";

const path = require("path");
const config = require(path.resolve("./config"));
const gulp = require("gulp");
const $ = require("gulp-load-plugins")({pattern: ["*"]});

        gulp.task("appendSassHeader", function(){

              return gulp
                    .src(config.paths.sass + "/*.scss")
                    .pipe($.replace(/^\/\*\s*\n([^\*]*(\*[^\/])?)*\*\/\W/, ""))
                    .pipe($.wrapper({ header: function(file){
                        var filename = file.path.replace(file.base, '').slice(0,-5);
                        return "/*\n * Author : " + config.project.author +"\n * Task : " + filename + "\n * Description : " + config.project.description +"\n */\n";
                    }
                    }))
                    .pipe(gulp.dest(config.paths.sass));
    });