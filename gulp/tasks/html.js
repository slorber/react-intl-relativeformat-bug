var changed    = require('gulp-changed');
var gulp       = require('gulp');
var handleErrors = require('../util/handleErrors');

gulp.task('html', function() {
    var dest = './build';
    // This one does nothing except moving the html file from src to build
	return gulp.src('./src/index.html')
		.pipe(changed(dest))
		.pipe(gulp.dest(dest))
		.on('error', handleErrors);
});
