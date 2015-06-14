module.exports = {
  options: {
    // sourceMap: true
  },
  dev: {
    files: {
      'dev/css/styles.css': 'dev/scss/main.scss'
    },
    options: {
      update: true,
      sourceMap: true
    }
  }
};
