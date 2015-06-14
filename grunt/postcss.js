module.exports = {
  options: {
    map: true,
    processors: [
      require('autoprefixer-core')({
        browsers: 'last 2 versions'
      }),
      require('csswring')
    ]
  },
  dev: {
    src: 'dev/css/styles.css'
  }
};
