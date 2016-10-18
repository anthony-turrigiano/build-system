 const path = require("path");
 const config = require(path.resolve("./config"));
 const gulp = require("gulp");
 const $ = require("gulp-load-plugins")({pattern:["*"]});
 const reload = $.browserSync.reload;

  gulp.task("build:min-scripts", ["build:scripts"], function(){
    return gulp
                .src(config.paths.js + "/build.js")
                .pipe($.plumber())
                .pipe($.sourcemaps.init())
                .pipe($.uglify())
                .pipe($.size({ title: 'Styles-min', gzip: true, showFiles: false }))
                .pipe($.sourcemaps.write())
                .pipe($.rename("build.min.js"))
                .pipe($.plumber.stop())
                .pipe($.cached())
                .pipe(gulp.dest(config.paths.js))
                .pipe(reload({stream: true}));
 });