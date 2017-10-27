const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// Configs
const BaseWebpackConfig = require('./webpack.base.config');
const DevServerConfig = require('./devserver.config');

// Path
const ROOT_PATH = path.join(path.resolve(__dirname), '/../..');
const FONTS = path.join(ROOT_PATH, '/app/assets/fonts');

module.exports = function developmentWebpackConfig() {
  return webpackMerge(BaseWebpackConfig(), {
    devtool: 'cheap-module-inline-source-map',
    devServer: DevServerConfig,
    plugins: [
      new webpack.NamedModulesPlugin(),
      new CopyWebpackPlugin([
        { from: FONTS, to: 'assets/fonts' },
      ]),
    ],
  });
};
