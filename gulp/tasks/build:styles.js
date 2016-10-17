/*
 * Author : Author Name <author email>
 * Task : build:styles
 * Description : Project Description
 */
 const path = require("path");
 const config = require(path.resolve("./config"));
 const gulp = require("gulp");
 const pkg = require(path.resolve("./package.json"));
 const banner = ['/**',
  ' * @name <%= pkg.name %>',
  ' * @version v<%= pkg.version %>',
  ' * @description <%= pkg.description %>',
  ' * @author <%= pkg.author %>',
  ' * @license <%= pkg.license %>',
  ' */',
  ''].join('\n');

   const $ = require("gulp-load-plugins")({
     rename : {
         "gulp-purifycss" : "purifycss",
         "postcss-font-magician" : "fontMagician",
     },
     pattern : ["*"]
 });

  const processors = [
        $.fontMagician,
     ];

  const reload = $.browserSync.reload;

  gulp.task("build:styles", ['build:sass'], function(){
    return gulp
                .src(config.paths.css + "/style.css")
                .pipe($.plumber())
                .pipe($.postcss(processors))
                .pipe($.purifycss([config.paths.client + "/**/*.js", config.paths.js + "/**/*.js",config.views.base + "/**/*.*"]))
                .pipe($.size({ title: 'Styles', gzip: true, showFiles: true }))
                .pipe($.plumber.stop())
                .pipe($.header(banner, { pkg : pkg } ))
                .pipe($.cached())
                .pipe(gulp.dest(config.paths.css))
                .pipe(reload({stream:true}));

                 });
