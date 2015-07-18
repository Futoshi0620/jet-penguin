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
var bulkSass = require('gulp-sass-bulk-import');


// ==================================
//
// Sass
//
// ==================================


gulp.task('sass', function () {
	gulp.src([config.sass.src])
		.pipe($.plumber())
		.pipe($.sourcemaps.init())
		.pipe(bulkSass())
		.pipe($.sass({
		}))
		.on('error', $.sass.logError)
		.pipe($.autoprefixer())
		.pipe($.sourcemaps.write({
			includeContent: false,
			sourceRoot: config.sass.sourceRoot
		}))
		.pipe(gulp.dest(config.sass.dest));
});

gulp.task('sass:dist', function () {
	gulp.src(config.sass.src)
		.pipe(bulkSass())
		.pipe($.sass({
		}))
		.pipe($.autoprefixer())
		.pipe($.rename({
			extname: ".min.css"
		}))
		.pipe(gulp.dest(config.sass.dest));
});