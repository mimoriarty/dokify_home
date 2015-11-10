// Require
var gulp = require('gulp'),
    connect = require('gulp-connect'),
    less = require('gulp-less'),
    sass = require('gulp-sass'),
    minify = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    growl = require('gulp-notify-growl');


// Paths
var paths = {
    'dev': {
        'less': './assets/less/',
        'js': './assets/js/',
        'vendor': './assets/vendor/'
    },
    'production': {
        'css': './public/assets/css/',
        'js': './public/assets/js/'
    }
};


//Server
gulp.task('connect', function() {
  connect.server({
  	root: '../dokify_home',
  	livereload: true
  });
});


// CSS
gulp.task('css', function() {
  gulp.src(paths.dev.less+'application.less')
    .pipe(less())
    .pipe(gulp.dest(paths.production.css))
    .pipe(minify({keepSpecialComments:0}))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(paths.production.css))
    .pipe(connect.reload());
});


// JS
gulp.task('js', function(){
  gulp.src([
      // paths.dev.vendor+'jquery/dist/jquery.js',
      paths.dev.js+'application.js'
    ])
    .pipe(concat('application.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(paths.production.js))
    .pipe(connect.reload());
});


// Tasks
gulp.task('watch', function() {
  gulp.watch(paths.dev.less + '/**/*.less', ['css']);
  gulp.watch(paths.dev.js + '/*.js', ['js']);
});

gulp.task('default', ['connect', 'watch', 'css', 'js']);
