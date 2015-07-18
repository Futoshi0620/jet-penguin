
var dir;

dir = {
	assets: './assets',
	src: './assets/src',
	dist: './assets/dist'
};



module.exports = {

	vendorStyles:[
		{
			src: 'node_modules/swiper/dist/css/swiper.css',
			basename: "_swiper",
			extname: ".scss",
			dest: dir.src + '/styles/object/component'

		}
	],
	fonts: {
		src: dir.src + '/fonts/**/*',
		dest: dir.dist + '/fonts'
	},

	images: {
		src: [
			dir.src + '/images/**/*.png',
			dir.src + '/images/**/*.svg',
			dir.src + '/images/**/*.jpg',
			dir.src + '/images/**/*.jpeg',
			dir.src + '/images/**/*.gif'
		],
		dest: dir.dist + '/images'
	},

	/**
	 *
	 * browserSync.
	 *
	 */
	browserSync: {
		proxy: 'jet-penguin.dev',
		server: {
			baseDir: './'
		},
		files: [
			dir.dist + '/**',
			"./**/*.php",
			"./**/*.html"
		]
	},

	/**
	 *
	 * sass Compile Option.
	 *
	 */
	sass: {
		src: dir.src + '/styles/**/*.scss',
		dest: dir.dist + '/styles',
		sourceRoot: '../../../assets/src/styles'
	},

	/**
	 *
	 * JavaScript.
	 *
	 */
	browserify: {
		bundleOption: {
			cache: {}, packageCache: {}, fullPaths: false,
			debug: true,
			entries: dir.src + '/scripts/all.js',
			extensions: ['.coffee', 'js', 'jsx', 'cjsx'],
		},
		dest: dir.dist + '/scripts/',
		filename: 'all.js'

	}
};
