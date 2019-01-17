var gulp = require('gulp');
var sassLint = require('gulp-sass-lint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

var staticPath = './project/src',
    distPath = './project/dist';
var sassPath = staticPath + '/scss',
    cssPath = distPath + '/css';

var runSass = function(src, dest) {
  var sassOption = {
    outputStyle : "expanded"
  };
  return gulp.src(src)
    .pipe(sass(sassOption).on('error', function(err) {
      throw err;
    }))
    .pipe(concat('app.css'))
    .pipe(gulp.dest(dest));
};

var runSassLint = function(src) {
  return gulp.src(src)
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError());
};

// var runConcat = function(src, dest) {
//   return gulp.src(src)
//     .pipe(concat('app.css'))
//     .pipe(gulp.dest(dest));
// };

gulp.task('sass-lint', function() {
  runSassLint(sassPath + '/*.scss');
});
gulp.task('sass', ['sass-lint'], function() {
  runSass(sassPath + '/*.scss', cssPath);
});
// gulp.task('sass:concat', function() {
//   runConcat(sassPath + '/css/*.css', cssPath);
// });

gulp.task('watch:sass', function() {
  gulp.watch(sassPath + '/*.scss', ['sass']);
});
gulp.task('watch', ['watch:sass']);

gulp.task('dev', ['sass', 'watch']);
gulp.task('default', ['dev']);