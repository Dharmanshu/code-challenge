(function () {
    'use strict';

    module.exports = function(grunt) {

        grunt.initConfig({
            pkg: grunt.file.readJSON('./package.json'),
            jshint: {
                files: ['Gruntfile.js', 'src/*.js'],
                options: {
                    globals: {
                        jQuery: true
                    }
                }
            },

            watch: {
                options: {livereload: true},
                files: ['<%= jshint.files %>'],
                tasks: ['jshint']
            },

            sass: {
                dist: {
                    files: {
                        'src/css/main.css': 'src/scss/main.scss'
                    }
                }
            },

            express: {
                all:{
                    options:{
                        port: 9000,
                        hostname: 'localhost',
                        base: ['.'],
                        livereload: true
                    }
                }
            }
        });

        grunt.loadNpmTasks('grunt-contrib-jshint');
        grunt.loadNpmTasks('grunt-contrib-watch');
        grunt.loadNpmTasks('grunt-contrib-sass');
        grunt.loadNpmTasks('grunt-express');

        grunt.registerTask('default', ['jshint', 'sass']);
        grunt.registerTask('server', ['express', 'watch']);

    };
}());

