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
// minify images.
//
// ==================================

gulp.task('images', function () {
	gulp.src(config.images.src)
		.pipe($.plumber({
			errorHandler: $.notify.onError('<%= error.message %>')
		}))
		.pipe($.imagemin({
			progressive: true,
			svgoPlugins: [
				{
					removeViewBox: false
				}
			]
		}))
		.pipe(gulp.dest(config.images.dest));
});