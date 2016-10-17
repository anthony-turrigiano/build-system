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

        gulp.task("appendGulpTaskHeader", function(){

              return gulp
                    .src(config.gulp.tasks + "/*.js")
                    .pipe($.stripComments())
                    .pipe($.wrapper({ header: function(file){
                        var filename = file.path.replace(file.base, '').slice(0,-3);
                        return "/*\n * Author : " + config.project.author +"\n * Task : " + filename + "\n * Description : " + config.project.description +"\n */\n";
                    }
                    }))
                    .pipe(gulp.dest(config.gulp.tasks));
    });