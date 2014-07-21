module.exports = function (grunt) {

    // Set static dir
    var staticDir = grunt.option('static') || '';
    grunt.config.set('static', staticDir)

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        paths: {
            sass: grunt.config.get('static') + 'sass/',
            less: grunt.config.get('static') + 'less/',
            css: grunt.config.get('static') + 'css/',
            js: grunt.config.get('static') + 'js/'
        },
        clean: {
            cssAll: {
                expand: true,
                cwd: '<%= paths.css %>',
                src: ['**/*.css'],
                options: {
                  force: true
                }
            },
            css: {
                expand: true,
                cwd: '<%= paths.css %>',
                src: ['**/*.css', '!**/*.min.css'],
                options: {
                  force: true
                }
            },
            jsMin: {
                expand: true,
                cwd: '<%= paths.js %>',
                src: ['**/*.min.js'],
                options: {
                  force: true
                }
            }
        },
        less: {
            sources: {
                files: [{
                    expand: true,
                    cwd: '<%= paths.less %>',
                    src: ['**/*.less'],
                    dest: '<%= paths.css %>',
                    ext: '.css'
                }]
            }
        },
        compass: {
            dist: {
                options: {
                    sassDir: '<%= paths.sass %>',
                    cssDir: '<%= paths.css %>'
                }
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= paths.js %>',
                    src: ['**/*.js', '!<%= paths.js %>**/*.min.js'],
                    dest: '<%= paths.js %>',
                    ext: '.min.js'
                }]
            }
        },
        cssmin: {
            minify: {
                expand: true,
                cwd: '<%= paths.css %>',
                src: ['**/*.css', '!**/*.min.css'],
                dest: '<%= paths.css %>',
                ext: '.min.css'
            }
        },
        watch: {
            css: {
                files: ['<%= paths.sass %>**/*.scss', '<%= paths.less %>**/*.less'],
                tasks: ['clean:cssAll', 'compass', 'less', 'cssmin']
            },
            js: {
                files: ['<%= paths.js %>**/*.js', '!<%= paths.js %>**/*.min.js'],
                tasks: ['clean:jsMin', 'uglify']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('cleanAll', ['clean']);
    grunt.registerTask('cleanCss', ['clean:css']);
    grunt.registerTask('cleanJsMin', ['clean:jsMin']);
    grunt.registerTask('buildAll', ['clean', 'compass', 'less', 'cssmin', 'clean:css', 'uglify']);
}
