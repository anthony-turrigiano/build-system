/*
 * Author : Author Name <author email>
 * Task : build:min-styles
 * Description : Project Description
 */

  const path = require("path");
 const config = require(path.resolve("./config"));
 const gulp = require("gulp");

  const $ = require("gulp-load-plugins")({

          rename : {
         "postcss-font-magician" : "fontMagician"
     },
     pattern : ["*"]
 });
 const reload = $.browserSync.reload;

  const processors = [
         $.cssnext({
            autoprefixer : false,
            pixrem : false,
        }),
        $.cssnano({
            autoprefixer : {
                browsers : config.gulp.plugins.autoprefixer,
                add : true,
                discardComments: {
                    removeAll: true
                },
                filterPlugins : false
            }
        })
     ];

  gulp.task("build:min-styles", ["build:styles"], function(){
    return gulp
                .src(config.paths.css + "/style.css")
                .pipe($.plumber())
                .pipe($.sourcemaps.init())
                .pipe($.postcss(processors))
                .pipe($.cleanCss({keepSpecialComments : 0}))
                .pipe($.size({ title: 'Styles-min', gzip: true, showFiles: false }))
                .pipe($.sourcemaps.write())
                .pipe($.rename("style.min.css"))
                .pipe($.plumber.stop())
                .pipe($.cached())
                .pipe(gulp.dest(config.paths.css))
                .pipe(reload({stream: true}));
 });