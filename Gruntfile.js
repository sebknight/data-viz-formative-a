module.exports = function (grunt) {
    grunt.initConfig({
        cssmin: { //name the task (object)
            target: {
                files: [{
                    expand: true,
                    cwd: 'css/', //check working directory
                    src: ['*.css', '!*.min.css'], //files to be minified
                    dest: 'css/', //destination
                    ext: '.min.css' //file extension
                }]
            }
        },
        watch: {
            css: {
                files: ['css/style.css', 'css/style.scss', 'js/script.js'],
                tasks: ['sasscompile', 'clint', 'cssmin', 'hint', 'ugly']
            }
        },
        uglify: {
            my_target: {
                files: {
                    'js/script.min.js': ['js/script.js']
                }
            }
        },
        jshint: {
            all: ['Gruntfile.js', 'js/script.js']
        },
        sass: { // Task
            dist: { // Target
                files: { // Dictionary of files
                    'css/style.css': 'css/style.scss', // 'destination': 'source'
                }
            }
        },
        csslint: {
            strict: {
                options: {
                    import: 2
                },
                src: ['css/style.css']
            },
            lax: {
                options: {
                    import: false
                },
                src: ['css/style.css']
            }
        }
    });


    //grunt.loadNpmTasks();
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    // grunt.registerTask([]);
    grunt.registerTask('min', ['cssmin']); //task name can't be the same as in loadnpmtask, will cause inf loop
    grunt.registerTask('w', ['watch']);
    grunt.registerTask('ugly', ['uglify']);
    grunt.registerTask('hint', ['jshint']);
    grunt.registerTask('sasscompile', ['sass']);
    grunt.registerTask('clint', ['csslint']);

};