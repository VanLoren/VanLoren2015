module.exports = function(grunt) {
    var _;
    _ = grunt.util._;
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            compile: {
                options: {
                    compress: true
                },
                files: [
                  {
                      expand: true,
                      cwd: 'Content/css/',
                      src: ['**/*.less', '!**/_*.less'],
                      dest: 'Content/css/',
                      ext: '.css'
                  }
                ]
            }
        },
        watch: {
            options: {
                atBegin: true
            },
            less: {
                options: [ { compress: true } ],
                files: ['Content/less/*.less'],
                tasks: ['less', 'autoprefixer']
            },
            grunticon: {
                files: ['Content/svg/*.svg'],
                tasks: ['grunticon']
            }
        },
        autoprefixer: {
            site: {
                    src: 'Content/css/main.css',
                    options: { browsers: ['last 2 versions', 'ie 9', 'Firefox > 20', '> 5%'] }
            }
        },
        grunticon: {
            icons: {
                    files: [
                      {
                          expand: true,
                          cwd: './Content/svg/',
                          src: ['**/*.svg'],
                          dest: "./Content/images/icons/"
                      }
                    ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-grunticon');
    grunt.registerTask('build', ['less', 'autoprefixer', 'grunticon']);
    return grunt.registerTask('default', ['build']);
};