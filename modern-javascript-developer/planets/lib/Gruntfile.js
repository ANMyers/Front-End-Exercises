module.exports = function(grunt) {
  grunt.initConfig({
    browserify: {
      js: {
        src: ['../javascript/main.js'],
        dest: '../dist/app.js'
      }
    },
    jshint: {
      options: {
        predef: [ "document", "console", "$" ],
        esnext: true,
        globalstrict: true,
        globals: {"CarLot": true},
        browserify: true
      },
      files: ['../javascript/**/*.js']
    },
    watch: {
      javascripts: {
        files: ['../javascript/**/*.js'],
        tasks: ['jshint', 'browserify']
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['jshint', 'browserify', 'watch']);
};