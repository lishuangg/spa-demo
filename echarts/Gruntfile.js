module.exports = function (grunt) {
  grunt.initConfig({
    htmlmin: {
      options: {
        collapseWhitespace: true,
        preserveLineBreaks: false
      },
      files:{
        src:'./index.html',
        dest:'dist/index.html'    
      } 
    },
    cssmin:{
      'dist/css/layout.css':'css/layout.css'
    },
    uglify:{
      files:{
        expand:true,
        src:'*.js',
        dest:'dist/'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['htmlmin','cssmin','uglify']); 
};
