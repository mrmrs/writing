const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
})

const debug = process.env.NODE_ENV !== 'production';

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx', 'md'],
  assetPrefix: !debug? '/writing' : '',
  outDir: 'docs',
  exportPathMap: function() {
      return {
        '/': { page: '/' },
        '/chaos-design': { page: '/chaos-design' },
        '/design-reading': { page: '/design-reading' },
        '/components-ai': { page: '/components-ai' },
        '/advice-on-change': { page: '/advice-on-change' },
        '/common-vim': { page: '/common-vim' },
        '/component-styling-api': { page: '/component-styling-api' },
        '/design-systems': { page: '/design-systems' },
        '/developing-ui': { page: '/developing-ui' },
        '/dogma': { page: '/dogma' },
        '/essential-vim-plugins': { page: '/essential-vim-plugins' },
        '/getting-critiqued': { page: '/getting-critiqued' },
        '/good-css': { page: '/good-css' },
        '/learning-css': { page: '/learning-css' },
        '/line-height': { page: '/line-height' },
        '/living-with-jxnblk': { page: '/living-with-jxnblk' },
        '/mobile-first-css': { page: '/mobile-first-css' },
        '/reading-material': { page: '/reading-material' },
        '/scalable-css': { page: '/scalable-css' },
        '/the-veil-of-ignorance': { page: '/the-veil-of-ignorance' },
        '/too-many-tools': { page: '/too-many-tools' },
        '/vim-as-a-design-tool': { page: '/vim-as-a-design-tool' },
        '/web-design-procss': { page: '/web-design-procss' },
        '/webfonts': { page: '/webfonts' },
        '/what-are-classes-for': { page: '/what-are-classes-for' },
        '/what-is-css-for': { page: '/what-is-css-for' },
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
