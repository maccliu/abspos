// gulp
const gulp = require("gulp");
const { src, dest } = gulp;
const { series, parallel, watch } = gulp;

// gulp plugins
const del = require("del");
const rename = require("gulp-rename");
const uglify = require("gulp-uglify");
const uglify_conf = {
  output: {
    comments: "some",
  },
};

/**
 * minify
 */
function task_minify(cb) {
  src(["abspos.js"])
    .pipe(uglify(uglify_conf))
    .pipe(rename({
      extname: ".min.js"
    }))
    .pipe(dest("."));

  cb();
}

/**
 * tasks
 */
gulp.task("minify", task_minify);

/**
 * exports
 */
exports.default = series(
  "minify",
);