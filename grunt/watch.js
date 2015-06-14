module.exports = {
  grunt: {
    files: ['Gruntfile.js', 'grunt/*.js'],
    options: {
      reload: true
    },
    tasks: ['sass', 'postcss', 'compile-handlebars']
  },
  sass: {
    files: ['src/**/*.scss' ],
    tasks: ['css']
  },
  js: {
    files: ['src/**/*.js' ],
    tasks: ['copy:js']
  },
  handlebars: {
    files: ['src/templates/**/*.handlebars', 'src/fixtures/**/*.json'],
    tasks: 'compile-handlebars'
  }
};
