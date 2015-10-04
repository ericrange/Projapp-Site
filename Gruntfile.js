module.exports = function(grunt) {
  grunt.initConfig({

    watch: {
      styles: {
        files: ["themes/default/styles/**/*.scss"],
        tasks: ["sass"]
      }
    },

    sass: {
      dist: {
        files: {
          "themes/default/source/css/styles.min.css": "themes/default/styles/index.scss"
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
    },

    compress: {
      html: {
        options: {
          mode: "gzip"
        },
        expand: true,
        cwd: "public/",
        src: ["**/*.html"],
        dest: "public/",
        ext: ".html.gz"
      },
      jpg: {
        options: {
          mode: "gzip"
        },
        expand: true,
        cwd: "public/",
        src: ["**/*.jpg"],
        dest: "public/",
        ext: ".jpg.gz"
      },
      png: {
        options: {
          mode: "gzip"
        },
        expand: true,
        cwd: "public/",
        src: ["**/*.png"],
        dest: "public/",
        ext: ".png.gz"
      },
      css: {
        options: {
          mode: "gzip"
        },
        expand: true,
        cwd: "public/",
        src: ["**/*.min.css"],
        dest: "public/",
        ext: ".min.css.gz"
      }
    },

    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          "public/index.html": "public/index.html",
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-htmlmin");
  grunt.loadNpmTasks("grunt-contrib-compress");

  //grunt.registerTask("watch", ["watch"]);
  grunt.registerTask("default", ["watch"]);
  grunt.registerTask("build", ["sass", "htmlmin", "compress"]);
}
