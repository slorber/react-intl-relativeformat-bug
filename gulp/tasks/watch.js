var gulp = require('gulp');
var gutil = require('gulp-util');

gulp.task('watch', function() {

    // JS watching is handled by Watchify
    gulp.watch('./src/img/**', ['images']);
    gulp.watch('./src/**/*.less', ['styles']);
    gulp.watch('./src/index.html', ['html']);

    // TODO probably need to start an emulator like Ripple or something ?
    var onJsChange = function(file) {
        gutil.log("Change detected in ./build:",file.path);
    };
    gulp.watch(['./build/**']).on('change', onJsChange);

});
