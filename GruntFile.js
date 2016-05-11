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
                files: ['<%= jshint.files %>'],
                tasks: ['jshint']
            },

            sass: {
                dist: {
                    files: {
                        'src/css/main.css': 'src/scss/main.scss'
                    }
                }
            }
        });

        grunt.loadNpmTasks('grunt-contrib-jshint');
        grunt.loadNpmTasks('grunt-contrib-watch');
        grunt.loadNpmTasks('grunt-contrib-sass');

        grunt.registerTask('default', ['jshint', 'sass']);

    };
}());

