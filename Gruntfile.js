module.exports = function(grunt) {
  grunt.initConfig({

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

  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask("default", ["sass"]);
}
