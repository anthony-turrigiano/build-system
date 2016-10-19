const path = require("path");
const config = require(path.resolve("./config"));
const gulp = require("gulp");
const $ = require("gulp-load-plugins")({pattern:["*"]});
const reload = $.browserSync.reload;
const pkg = require(path.resolve("./package.json"));
const banner = ['/**',
  ' * @name <%= pkg.name %>',
  ' * @version v<%= pkg.version %>',
  ' * @description <%= pkg.description %>',
  ' * @author <%= pkg.author %>',
  ' * @license <%= pkg.license %>',
  ' */',
  ''].join('\n');

gulp.task("build:scripts", ["delBuild-js"], function(){
    return gulp
                .src([
                        "!" + config.paths.js + "/build.min.js",
                        "!" + config.paths.js + "/build.js", 
                        config.paths.js + "/**/*.js"]
                    )
                .pipe($.plumber())
                .pipe($.concat("build.js"))
                .pipe($.size({ title: 'Styles', gzip: true, showFiles: true }))
                .pipe($.plumber.stop())
                .pipe($.header(banner, { pkg : pkg } ))
                .pipe($.cached())
                .pipe(gulp.dest(config.paths.js))
                .pipe(reload({stream:true}));
});
