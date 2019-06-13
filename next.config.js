const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
})

const debug = process.env.NODE_ENV !== 'production';

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  assetPrefix: !debug? '/writing' : '',
  outDir: 'docs',
  exportPathMap: function() {
      return {
        '/': { page: '/' },
        '/component-styling-api': { page: '/component-styling-api' },
        '/the-veil-of-ignorance': { page: '/the-veil-of-ignorance' },
        '/scalable-css': { page: '/scalable-css' },
        '/design-systems': { page: '/design-systems' },
        '/developing-ui': { page: '/developing-ui' },
        '/dogma': { page: '/dogma' },
        '/webfonts': { page: '/webfonts' },
        '/getting-critiqued': { page: '/getting-critiqued' },
      };
  },
  publicRuntimeConfig: {
    linkPrefix: !debug? '/writing' : ''
  },
  webpack: (config, { dev }) => {
    // Perform customizations to webpack config
    // console.log('webpack');
    // console.log(config.module.rules, dev);
    config.module.rules = config.module.rules.map(rule => {
      if(rule.loader === 'babel-loader') {
        rule.options.cacheDirectory = false
      }
      return rule
    })
    // Important: return the modified config
    return config
  }
})
