module.exports = function(grunt) {
  grunt.initConfig({

    watch: {
      styles: {
        files: ['themes/default/styles/**/*.scss'],
        tasks: ['sass']
      }
    },

    sass: {
      dist: {
        files: {
          'themes/default/source/css/styles.min.css': 'themes/default/styles/index.scss'
        }
      }
    },

    uglify: {
      options: {
        mangle: true
      },
      default: {
        files: {
          "": [
            ""
          ]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks('grunt-contrib-sass');

  //grunt.registerTask("watch", ["watch"]);
  grunt.registerTask("default", ["watch"]);
}
