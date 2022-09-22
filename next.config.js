/* eslint-disable */
const EsLintPlugin = require('eslint-webpack-plugin');
const path = require('path');
const fs = require('fs');
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

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

module.exports = nextConfig;
