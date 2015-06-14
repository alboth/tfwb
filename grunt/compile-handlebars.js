module.exports = {
  dev: {
    files: [{
      expand: true,
      cwd: 'src/templates/',
      src: ['**/*.handlebars', '!_partials/**/*.handlebars'],
      dest: 'dev/',
      ext: '.html',
      // flatten: true
    }],
    partials: 'src/templates/_partials/**/*.handlebars',
    templateData: 'src/fixtures/globals.json',
    globals: [
      'src/fixtures/sitemap.json',
      'src/fixtures/sitemap-meta.json'
    ]
  }
};
