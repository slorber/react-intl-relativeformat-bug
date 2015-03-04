var changed    = require('gulp-changed');
var gulp       = require('gulp');
var imagemin   = require('gulp-imagemin');
var handleErrors = require('../util/handleErrors');


gulp.task('images', function() {
    var dest = './build/img';
	return gulp.src('./src/img/**')
		.pipe(changed(dest)) // Ignore unchanged files
		.pipe(imagemin()) // Optimize
		.pipe(gulp.dest(dest))
		.on('error', handleErrors);
});
