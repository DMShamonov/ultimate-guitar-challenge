// Vendors
const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;

// Configs
const BaseWebpackConfig = require('./webpack.base.config');

// Path
const ROOT_PATH = path.join(path.resolve(__dirname), '/../..');
const DIST = path.join(ROOT_PATH, '/dist');
const ASSETS = path.join(ROOT_PATH, '/app/assets');

module.exports = function productionWebpackConfig() {
  return webpackMerge(BaseWebpackConfig(), {
    output: {
      path: DIST,
    },
    plugins: [
      new CleanWebpackPlugin('dist', {
        root: ROOT_PATH,
      }),
      new CopyWebpackPlugin([
        { from: ASSETS, to: 'assets' },
      ], {
        ignore: ['*.sass'],
      }),
      new webpack.HashedModuleIdsPlugin(),
      new webpack.LoaderOptionsPlugin({
        minimize: true,
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
      new UglifyjsWebpackPlugin({
        parallel: true,
        uglifyOptions: {
          compress: {
            drop_console: true,
            warnings: false,
          },
        },
      }),
      new ImageminWebpackPlugin({
        test: /\.(svg|png|jpe?g)$/,
        svgo: {
          removeTitle: true,
          removeDesc: true,
        },
      }),
    ],
  });
};
