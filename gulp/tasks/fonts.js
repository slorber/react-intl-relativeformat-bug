var changed    = require('gulp-changed');
var gulp       = require('gulp');
var handleErrors = require('../util/handleErrors');


gulp.task('fonts',function() {
	var dest = './build/fonts';
	return gulp.src('./src/fonts/**')
		.pipe(changed(dest)) // Ignore unchanged files
		.pipe(gulp.dest(dest))
		.on('error', handleErrors);
});
