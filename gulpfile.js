// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');

gulp.task('webserver', function(){
    connect.server({
        livereload: true
    });
});

gulp.task('sass', function() {
    gulp.src('src/main/webapp/*.scss')
        .pipe(sass())
        .pipe(gulp.dest(function(f) {
            return f.base;
        }))
        .pipe(connect.reload);
});



gulp.task('default', ['sass', 'webserver'], function() {
    gulp.watch('src/main/webapp/*.scss', ['sass']);
});