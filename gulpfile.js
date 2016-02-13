var gulp = require('gulp');
var $    = require('gulp-load-plugins')();

var sassSrc = "scss/{app,landing}.scss";

var sassPaths = [
    'bower_components/foundation-sites/scss',
    'bower_components/motion-ui/src'
];

gulp.task('sass', function() {
    return gulp.src(sassSrc)
        .pipe($.sass({
            includePaths: sassPaths
        })
        .on('error', $.sass.logError))
        .pipe($.autoprefixer({
            browsers: ['last 2 versions', 'ie >= 9']
        }))
        .pipe(gulp.dest('static/css'));
});

gulp.task('watch', function() {
    gulp.watch(['scss/**/*.scss'], ['sass']);
});

gulp.task('default', ['sass', 'watch']);
