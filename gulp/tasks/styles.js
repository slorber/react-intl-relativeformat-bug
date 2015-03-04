var gulp = require('gulp');
var recess = require('gulp-recess');
var less = require('gulp-less');
var handleErrors = require('../util/handleErrors');
var livereload  = require("gulp-livereload");
var gulpif       = require("gulp-if");

var postcss      = require('gulp-postcss');
var autoprefixer = require('autoprefixer-core');


gulp.task('styles', ['cleanAppCss'], function () {
    return gulp.src('./src/app.less')
        .on('error', handleErrors)
        // .pipe(recess())
        .pipe(less())
        .on('error', handleErrors)
        .pipe(postcss([ autoprefixer({ browsers: ['last 4 version'] }) ]))
        .on('error', handleErrors)
        .pipe(gulp.dest('./build'))
        .pipe(gulpif(!global.buildNoWatch, livereload()));;
});