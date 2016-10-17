/*
 * Author : Author Name <author email>
 * Task : watch
 * Description : Project Description
 */
 const path = require("path");
 const config = require(path.resolve("./config"));
 const gulp = require("gulp");
 const $ = require("gulp-load-plugins")({pattern : ["*"]});
 const reload = $.browserSync.reload;

  gulp.task("watch", ["browserSync"], function(){
     gulp.watch([config.views.base + "/**/*.*"], reload).on('error', function(error) {
      if (error.code === 'ENOENT') {
        return;
      }
    });
     gulp.watch([config.paths.sass +"/**/*.scss"], ["build:dist-styles"], reload);
 });