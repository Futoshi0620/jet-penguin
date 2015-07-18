'use strict';

// ==================================
//
// Load modules.
//
// ==================================

var config = require('../config.js');
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

// ==================================
//
// Fonts
//
// ==================================

gulp.task('vendor-style', function () {

	config.vendorStyles.forEach(function (style) {
		gulp.src(style.src)
			.pipe($.rename({
				basename: style.basename,
				extname: style.extname
			}))
			.pipe(gulp.dest(style.dest));
	})

});