/*
 * Author : Author Name <author email>
 * Task : build
 * Description : Project Description
 */
const gulp = require("gulp");
const runSequence = require("run-sequence");

gulp.task('build', function (cb) {
  runSequence('watch', cb);
});