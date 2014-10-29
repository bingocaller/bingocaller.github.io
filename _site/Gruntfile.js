module.exports = function(grunt) {

	// 1. All configuration goes here
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// Project settings
		config: {
			// Configurable paths
			app: '',
			dist: 'build'
		},

		// Empties folders to start fresh
		clean: {
			dist: {
				files: [{
					dot: true,
					src: [
						'.tmp',
						'<%= config.dist %>/*',
						'!<%= config.dist %>/.git*'
					]
				}]
			},
			server: '.tmp'
		},

		autoprefixer: {
			options: {
				browsers: ['> 3%']
			},
			dist: {
				files: {
					'css/main.css': 'css/main.css'
				}
			}
		},

		cssmin: {
			report: 'gzip',
			add_banner: {
				options: {
					banner: '/* Based on HTML5 Boilerplate v4.3.0 | MIT License | http://h5bp.com/ */'
				}
			},
			// minify: {
			// 	expand: true,
			// 	cwd: 'build/css/',
			// 	src: ['css/*.css', '!*.min.css'],
			// 	dest: 'build/css/',
			// 	ext: '.min.css'
			// }
			css: {
				src: 'css/main.css',
				dest: 'build/css/main.min.css'
			}
		},

		concat: {
			dist: {
				src: [
					'js/vendor/*.js', // All JS in the vendor folder
					'js/*.js' // All JS in the js folder
				],
				dest: 'js/concat.js',
			}
		},

		uglify: {
			build: {
				src: 'js/concat.js',
				dest: 'build/js/main.min.js'
			}
		},

		imagemin: {
			dynamic: {								// Another target
				options: {							// Target options
					optimizationLevel: 3
				},
				files: [{
					expand: true,					// Enable dynamic expansion
					cwd: 'img/', 					// Src matches are relative to this path
					src: ['*.{png,jpg,gif}'],	// Actual patterns to match
					dest: 'build/img'				// Destination path prefix
				}]
			}
		},

		htmlmin: {											// Task
			dist: {											// Target
				options: {
					collapseBooleanAttributes: true,
					collapseWhitespace: true,
					removeAttributeQuotes: true,
					removeCommentsFromCDATA: true,
					removeEmptyAttributes: true,
					removeOptionalTags: true,
					removeRedundantAttributes: true,
					useShortDoctype: true
				},
				files: {									// Dictionary of files
					'build/index.html': 'index.html'	    // 'destination': 'source'
				}
			}
		},

		watch: {
			// markup: {
			// 	files: ['index.html'],
			// 	tasks: ['htmlmin']
			// },
			styles: {
				files: ['css/main.css'],
				tasks: ['autoprefixer','cssmin']
			},
			scripts: {
				files: ['js/*.js'],
				tasks: ['concat', 'uglify'],
				options: {
					livereload: true,
					spawn: false,
				}
			}
		}

	});

	// 3. Where we tell Grunt we plan to use this plug-in.
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
	grunt.registerTask('default', [
		'clean',
		'autoprefixer',
		'cssmin',
		'concat',
		'uglify',
		'imagemin',
		'htmlmin'
	]);
};