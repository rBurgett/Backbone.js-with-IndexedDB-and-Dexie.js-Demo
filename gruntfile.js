module.exports = function(grunt) {

	// 1. All configuration goes here 
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		concat: {
			dist: {
				src: [
					'app/script/lib/jquery-1.11.1.min.js',
					'app/script/lib/underscore-min.js',
					'app/script/lib/backbone-min.js',
					'app/script/lib/dexie.js'
				],
				dest: 'app/script/deps.js'
			}
		},
		uglify: {
			build: {
				src: 'app/script/deps.js',
				dest: 'app/script/deps.min.js'
			}
		}
	});

	// 3. Where we tell Grunt we plan to use this plug-in.
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
	grunt.registerTask('default', ['concat', 'uglify']);

};