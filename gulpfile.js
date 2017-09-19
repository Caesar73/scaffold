/*
 * @author: Caesar
 * @module:
 *
 */

const gulp = require('gulp');


const less      = require('gulp-less');
const minifyCSS = require('gulp-csso');
const imagemin  = require('gulp-imagemin');

const amdOptimize = require("amd-optimize");
const babel  = require('gulp-babel');
const jshint = require('gulp-jshint')

const concat     = require('gulp-concat');
const uglify     = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const del        = require('del');

const paths = {
  babel: ['client/static/babel/**/*.js', '!client/external/**/*.js'],
  less: ['client/static/less/*.less'],
  js: 'client/static/js/**/*.js',
  img: 'client/static/img/**/*'
};


// Not all tasks need to use streams
// A gulpfile is just another node program and you can use any package available on npm
gulp.task('clean', function() {
  // You can use multiple globbing patterns as you would with `gulp.src`
  return del(['client/dist']);
});
gulp.task('clean:less', function() {
  // You can use multiple globbing patterns as you would with `gulp.src`
  return del(['client/dist/less']);
});
gulp.task('clean:sass', function() {
  // You can use multiple globbing patterns as you would with `gulp.src`
  return del(['client/dist/sass']);
});
gulp.task('clean:js', function() {
  // You can use multiple globbing patterns as you would with `gulp.src`
  return del(['client/dist/js']);
});
gulp.task('clean:img', function() {
  // You can use multiple globbing patterns as you would with `gulp.src`
  return del(['client/dist/img']);
});


gulp.task('less', function(){
  return gulp.src(paths.less)
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(gulp.dest('client/dist/css'))
});


// Copy all static images
gulp.task('img', ['clean:img'], function() {
  return gulp.src(paths.img)
    // Pass in options to the task
    .pipe(imagemin({optimizationLevel: 5}))
    .pipe(gulp.dest('client/dist/img'));
});


gulp.task('babel', ['clean:js'], function() {
  return gulp.src(paths.babel)
    .pipe(jshint())
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('client/dist/js'))
});


// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.babel, ['babel']);
  gulp.watch(paths.img, ['img']);
});


// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'babel', 'img']);

/*

        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(concat('all.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'))

 */