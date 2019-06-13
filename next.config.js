const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
})

const isProduction = process.env.NODE_ENV === 'production';

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  assetPrefix: isProduction ? '/writing' : '',
  outDir: 'docs',
  exportPathMap: function() {
      return {
        '/': { page: '/' }
      };
  },
  publicRuntimeConfig: {
    linkPrefix: isProduction ? '/writing' : ''
  }
})
