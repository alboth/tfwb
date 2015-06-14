module.exports = {
  'dev': ['clean', 'copy', 'sass', 'compile-handlebars'],
  'css': ['clean:css', 'copy:css', 'sass', 'postcss'],
  'default': ['serve:dev'],
  'serve:dev': ['dev', 'browserSync', 'watch']
};
