// gulp packages
var gulp = require('gulp');
var pump = require('pump');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var cleanCss = require('gulp-clean-css');
var concatCss = require('gulp-concat-css');

// gulp informations
var publicPath = {
  src: './public/src/',
  dest: './public/dist/',
}

// gulp tasks
gulp.task('hello', function () {
  return console.log('Gulp works!');
});

gulp.task('gulpworld', ['hello'], function () {
  return console.log('Hello gulpworld!');
});

gulp.task("concat", function () {
  pump([
    gulp.src([publicPath.src + 'stack.js', publicPath.src + 'queue.js']),
    concat('bundle.js'),
    gulp.dest(publicPath.src)
  ]);
});

gulp.task('uglify', [concat], function () {
  pump([
    gulp.src(publicPath.src + '*.js'),
    uglify(),
    gulp.dest(publicPath.dest)
  ]);
});

gulp.task("concatCSS", function () {
  pump([
    gulp.src([publicPath.src + '*.css']),
    concatCSs('bundle.css'),
    gulp.dest(publicPath.dest)
  ]);
});

gulp.task('cleanCss', function () {
  pump([
    gulp.src(publicPath.src + '*.css'),
    cleanCss(),
    gulp.dest(publicPath.dest)
  ]);
});

// gulp default tasks
gulp.task('default', ['hello']);
// gulp.task('default', ['concat', 'uglify']);

// gulp watch tasks
gulp.task('watch', function () {
  gulp.watch("./public/src/*.css", ['concatCss']);
  gulp.watch("./public/src/*.js", ['concat', 'uglify']);
});