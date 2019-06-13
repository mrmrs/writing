const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
})

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  outDir: 'docs',
  exportPathMap: function() {
      return {
        '/': { page: '/' }
      };
    }
})
