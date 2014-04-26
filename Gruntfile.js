module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'), //load configuration

   

    concat: { // concatination task settings
            dist: {
                src: [
                'css/reset.css', 
                'css/navigation.css',
                'css/media-queries.css'
                ],
                dest: 'dev/ucs-dev.css',
            }
        },

 css_prefix: {
        options: {
        prefix: 'libname-'
        },
        files: {
        'prefix/ucs-dev.css': ['dev/ucs-dev.css']
    }
  },


    cssmin: {
        css:{
            src: 'prefix/ucs-dev.css',
            dest: 'dist/ucs-min.css'
          }
    }



});
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-css-prefix');


grunt.registerTask('default', ['concat','css_prefix','cssmin']);
};