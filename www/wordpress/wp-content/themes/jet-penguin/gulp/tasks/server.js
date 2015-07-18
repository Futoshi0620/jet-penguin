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
// PHP Server
//
// ==================================
gulp.task('setPHPServer', function () {
	global.phpServer = true;
	config.browserSync.proxy = 'localhost:8000';
	connectPHP.server();
});

// ==================================
//
// browserSync
//
// ==================================

gulp.task('browserSync', function () {

	if (config.browserSync.proxy) {
		browserSync({
			proxy: config.browserSync.proxy
		});
		$.watch(config.browserSync.files, function () {
			browserSync.reload();
		});
	} else {
		browserSync({
			server: {
				baseDir: config.browserSync.baseDir
			},
			files: config.browserSync.files
		});
	}
});
