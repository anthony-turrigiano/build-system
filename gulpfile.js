"use strict";

const config = require("./config");
const requireDir = require('require-dir');
const dir = requireDir(config.gulp.tasks, {recurse: true});
dir;