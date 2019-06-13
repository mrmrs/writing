const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
})

const debug = process.env.NODE_ENV !== 'production';

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  assetPrefix: !debug? 'writing' : '',
  outDir: 'docs',
  exportPathMap: function() {
      return {
        '/': { page: '/' }
      };
  },
  publicRuntimeConfig: {
    linkPrefix: !debug? 'writing' : ''
  }
})
