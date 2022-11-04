/* eslint-disable */
const EsLintPlugin = require('eslint-webpack-plugin');
const path = require('path');
const fs = require('fs');
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);
const withPWA = require("next-pwa");
const { i18n} = require('./next-i18next.config')

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    
    // reactStrictMode: false,
    optimizeFonts: false,
    webpack: (config, { dev }) => {
      if (dev) {
        config.plugins.push(
          new EsLintPlugin({
            context: './',
            extensions: ['js', 'jsx', 'ts', 'tsx'],
            exclude: ['node_modules', 'dist'],
            resolvePluginsRelativeTo: __dirname,
            cacheLocation: path.resolve(resolveApp('node_modules'), '.cache/.eslintcache')
        })
        )
      }
      return config;
    }
};
// module.exports = withPWA({
//   pwa: {
//     dest: "public",
//     register: true,
//     skipWaiting: true,
//   },
// });
module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
});

// module.exports = nextConfig;
module.exports = withPWA({
  // next.js config

  
})
module.exports = {
  i18n: {
    defaultLocale: 'id',
    locales: ['en', 'id'],
    localePath: path.resolve('./public/locales')
  },
  pwa:{
    dest:'public',
    register:true,
    skipWaiting:true,
  }
};

