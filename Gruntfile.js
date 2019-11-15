module.exports = function (grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-exorcise');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-prettier');

    grunt.registerTask('default', ['clean', 'prettier', 'browserify', 'eslint', 'exorcise']);
    grunt.registerTask('dev', ['clean', 'prettier', 'browserify', 'eslint', 'watch']);
    grunt.registerTask('build', ['clean', 'prettier', 'browserify', 'eslint', 'exorcise']);

    grunt.initConfig({
        prettier: {
            files: {
                src: ['src/**/*.js']
            }
        },
        browserify: {
            dist: {
                options: {
                    transform: [
                        [
                            'babelify',
                        ],
                        [
                            'uglifyify', {
                            global: true,
                            sourceMap: true
                        }
                        ]
                    ],
                    browserifyOptions: {
                        debug: true
                    }
                },
                files: {
                    'dist/main.js': ['src/main.js'],
                }
            }
        },
        exorcise: {
            bundle: {
                options: {},
                files: {
                    'dist/main.map': ['dist/main.js'],
                }
            }
        },
        eslint: {
            options: {
                configFile: '.eslintrc',
                fix: true
            },
            target: 'src/**/*.js'
        },
        clean: [
            'dist'
        ],
        watch: {
            scripts: {
                files: ['src/**/*.js'],
                tasks: ['browserify', 'eslint']
            }
        }
    });
};