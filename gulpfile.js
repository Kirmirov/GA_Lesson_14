const {src, dest, watch} = require('gulp');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const browserSync = require ('browser-sync').create();

exports.zcss = function cm () {
  return src('./**/*.css')
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(dest('./css'));
};

exports.serve = function bs() {
  servSass();
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  watch("./*.html").on('change', browserSync.reload);
  watch("./sass/**/*.html", servSass);
  watch("./js/*.js").on('change', browserSync.reload);
};

function servSass() {
  return src('./sass/*.scss')
    .pipe(sass())
    .pipe(dest('./css'))
    .pipe(browserSync.stream());
};

