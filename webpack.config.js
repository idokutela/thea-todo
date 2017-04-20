// file : /webpack.config.js

const WebpackConfig = require('webpack-config').default;

const TARGET = process.env.npm_lifecycle_event;

let webpackConfig;

switch (TARGET) {
  case 'watch':
    webpackConfig = './webpack.dev.config.js';
    break;
  default:
    webpackConfig = './webpack.production.config.js';
    break;
}

module.exports = new WebpackConfig().extend(webpackConfig);
