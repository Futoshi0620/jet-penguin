'use strict';

// ==================================
//
// Load modules.
//
// ==================================

var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var watchify = require('watchify');
var browserSync = require('browser-sync');
var connectPHP = require('gulp-connect-php');
var config = require('../config.js');
var handleErrors = require('../util/handleErrors.js');
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();


// ==================================
//
// tasks.
//
// ==================================


gulp.task('build:dist', ['fonts','vendor-style', 'sass:dist', 'images', 'browserify']);
gulp.task('build', ['fonts','vendor-style',  'sass', 'images', 'browserify']);


gulp.task('watch', function () {
	$.watch(config.sass.src, function () {
		gulp.start('sass');
	});
	$.watch(config.images.src, function () {
		gulp.start('images');
	});
});

gulp.task('default', ['setWatch', 'build', 'watch', 'browserSync']);
gulp.task('phpserver', ['setPHPServer', 'default']);