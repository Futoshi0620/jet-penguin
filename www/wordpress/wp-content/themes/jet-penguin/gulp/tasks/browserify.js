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
// Compile JavaScripts.
//
// ==================================

gulp.task('setWatch', function () {
	global.isWatching = true;
});

gulp.task('browserify', function () {

	var b = browserify(config.browserify.bundleOption)
		.transform('coffeeify')
		.transform('babelify')
		.transform("browserify-shim")
		.transform("debowerify");

	var bundle = function () {
		b.bundle().on('error', handleErrors)
			.pipe(source(config.browserify.filename))
			.pipe(gulp.dest(config.browserify.dest));
	};
	if (global.isWatching) {
		var bundler = watchify(b);
		bundler.on('update', bundle);
	}
	bundle();
});
