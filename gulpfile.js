let gulp = require('gulp'),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    browserSync = require ('browser-sync').create();

gulp.task('zipcss', function() {
  return gulp.src('src/**/*.css')
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dir/css'));
})

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: "app/src/"
    }
  });
  gulp.watch("app/src/*.html").on('change', browserSync.reload)
})
