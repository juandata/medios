module.exports = function (grunt) {
  // Do grunt-related things in here (wrapper function)
    grunt.initConfig({
//Most Grunt tasks rely on configuration data defined in an object passed to the grunt.initConfig method
        autoprefixer: {
            dist: {
                files: {
                    'src/App.css': 'src/App.css' //compile the seconf file to the first
                }
            }
        },
        watch: {
            styles: {
                files: ['src/App.css'],
                tasks: ['autoprefixer']
            }
        }
    });
    // Load the plugin that provides the "autoprefixer" task.
    grunt.loadNpmTasks('grunt-autoprefixer');
    // I use grunt-contrib-watch to recompile build/style.css every time style.css changes.
    grunt.loadNpmTasks('grunt-contrib-watch');
};
