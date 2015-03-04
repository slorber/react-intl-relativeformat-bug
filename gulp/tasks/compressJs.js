
var uglify = require('gulp-uglify');
var gulp         = require('gulp');
var rename = require("gulp-rename");
var handleErrors = require('../util/handleErrors');


gulp.task('compressJs',['browserify','copyUncompressedBuild'], function() {
    return gulp.src('./build/app.js')
        .on('error', handleErrors)
        .pipe(uglify())
        .on('error', handleErrors)
        //.pipe(rename("app.ugly.js"))
        .pipe(gulp.dest('./build/'));
});


// For stample admins, an uncompressed build is loaded in production to make production debugging easier
gulp.task('copyUncompressedBuild',['browserify'],function() {
    return gulp.src('./build/app.js')
        .on('error', handleErrors)
        // Name is long on purpose to avoid malicious users to get unminified file
        .pipe(rename("app.uncompressed.for.admins.js"))
        .pipe(gulp.dest('./build/'));
});