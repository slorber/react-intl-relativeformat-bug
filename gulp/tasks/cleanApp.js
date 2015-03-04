var clean = require('gulp-clean');
var gulp  = require('gulp');


gulp.task('cleanAppJs', function() {
    return gulp.src('./build/app.js', {read: false})
        .pipe(clean({force: true}));
});

gulp.task('cleanAppCss', function() {
    return gulp.src('./build/app.css', {read: false})
        .pipe(clean({force: true}));
});
