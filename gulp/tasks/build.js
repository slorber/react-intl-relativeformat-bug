var gulp = require('gulp');

gulp.task('build', ['html', 'browserify','styles', 'images', 'fonts']);

// TODO use NODE_ENV variable instead of these!
gulp.task('buildprod', ['enable-nowatch-mode','html', 'browserify','compressJs','styles', 'images', 'fonts']);
gulp.task('buildstaging', ['enable-nowatch-mode','html', 'browserify','styles', 'images', 'fonts']);



gulp.task('enable-nowatch-mode',function() {
    // Use global variable for now: is there a better way?
    global.buildNoWatch = true;
});

