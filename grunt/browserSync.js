module.exports = {
  dev: {
    bsFiles: {
        src : [
            'dev/**/*.css',
            'dev/**/*.html'
        ]
    },
    options: {
        watchTask: true,
        server: './dev'
    }
  }
};
