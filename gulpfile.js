/**
 * Created by leandro on 16/04/15.
 */

var gulp = require('gulp');
var gutil = require('gulp-util');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var browserSync = require('browser-sync');
var coffee = require('gulp-coffee');
var reload      = browserSync.reload;

//otimizadores de imagens

var origem = "./src";

gulp.task('coffee', function() {
    gulp.src('./src/share.coffee')
        .pipe(coffee({bare: true}).on('error', gutil.log))
        //.pipe(gutil.bipe())
        .pipe(gulp.dest('./build/'))
});

gulp.task('server', function() {

    browserSync({
        server: './',
        files: "examples.html"
    });

    gulp.watch("./build/*").on('change', reload);
});

gulp.task('jslint', function() {
    gulp.src("./build/*.js")
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('default',['coffee', 'jslint', 'server'], function() {
    gulp.watch(origem+"/src/*", ['coffee', 'jslint']);
});