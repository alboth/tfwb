module.exports = {
  css: {
    files: [
      {expand:true, cwd:'src', src:'**/*.scss', dest:'dev/'}
    ]
  },
  images: {
    files: [
      {expand:true, cwd:'src', src:'img/**', dest:'dev/'}
    ]
  },
  js: {
    files: [
      {expand:true, cwd:'src', src:'js/**/*.js', dest:'dev/'}
    ]
  }
}
