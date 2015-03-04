"use strict";

var browserify   = require('browserify');
var gulp         = require('gulp');
var gutil        = require('gulp-util');
var handleErrors = require('../util/handleErrors');
var source       = require('vinyl-source-stream');
var watchify     = require("watchify");
var livereload   = require('gulp-livereload');
var gulpif       = require("gulp-if");


var buffer       = require('vinyl-buffer');
var uglify       = require('gulp-uglify');


var libs = [
    "ajax-interceptor",
    //"atom-react",
    "autolinker",
    "bounded-cache",
    "fuse.js",
    "highlight.js",
    "imagesloaded",
    "iscroll",
    "jquery",
    "keymaster",
    "lodash",
    "medium-editor",
    "mime-db",
    "mime-types",
    "moment",
    //"offline-js",
    "packery",
    "q",
    "rangy",
    //"react",
    //"react-date-picker",
    "spin.js",
    "steady",
    "store",
    "string",
    //"tether-tooltip",
    "uuid",
    "react-dnd"
];


// permits to create a special bundle for vendor libs
// See https://github.com/sogko/gulp-recipes/tree/master/browserify-separating-app-and-vendor-bundles
gulp.task('browserify-libs', function () {
    var b = browserify({
        debug: true
    });

    libs.forEach(function(lib) {
        b.require(lib);
    });

    return b.bundle()
        .on('error', handleErrors)
        .pipe(source('appLibs.js'))
        // TODO use node_env instead of "global.buildNoWatch"
        .pipe(gulpif(global.buildNoWatch, buffer()))
        .pipe(gulpif(global.buildNoWatch, uglify()))
        .pipe(gulp.dest('./build'));
});



// Inspired by http://truongtx.me/2014/08/06/using-watchify-with-gulp-for-fast-browserify-build/

gulp.task('browserify',['cleanAppJs','browserify-libs'],function browserifyShare(){
    var b = browserify({
        cache: {},
        packageCache: {},
        fullPaths: true,
        extensions: ['.jsx'],
        paths: ['./node_modules','./src/'],
        debug: true
    });
    b.transform('reactify');

    libs.forEach(function(lib) {
        b.external(lib);
    });

    // TODO use node_env instead of "global.buildNoWatch"
    if ( !global.buildNoWatch ) {
        b = watchify(b);
        b.on('update', function() {
            gutil.log("Watchify detected change -> Rebuilding bundle");
            return bundleShare(b);
        });
    }
    b.on('error', handleErrors);

    //b.add('app.js'); // It seems to produce weird behaviors when both using "add" and "require"

    // expose does not seem to work well... see https://github.com/substack/node-browserify/issues/850
    b.require('app.js',{expose: 'app'});

    return bundleShare(b);
});



function bundleShare(b) {
    return b.bundle()
        .on('error', handleErrors)
        .pipe(source('app.js'))
        .pipe(gulp.dest('./build'))
        // TODO use node_env instead of "global.buildNoWatch"
        .pipe(gulpif(!global.buildNoWatch, livereload()));
}