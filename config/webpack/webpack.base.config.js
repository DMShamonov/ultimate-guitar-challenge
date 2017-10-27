// Vendors
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Path
const ROOT_PATH = path.join(path.resolve(__dirname), '/../..');
const NODE_MODULES = path.join(ROOT_PATH, '/node_modules');
const POSTCSS_CONFIG = path.join(ROOT_PATH, '/config/postcss.config.js');
const ESLINT_CONFIG = path.join(ROOT_PATH, '/config/.eslintrc.json');

module.exports = function baseWebpackConfig() {
  return {
    entry: {
      app: './app/src/index.jsx',
      vendor: [
        'autobind-decorator',
        'axios',
        'classnames',
        'lodash',
        'react',
        'react-dom',
        'react-modal',
        'react-redux',
        'react-router-dom',
        'redux',
        'redux-thunk',
        'normalize.css',
      ],
    },
    output: {
      filename: '[name].[chunkhash].js',
      publicPath: '/',
    },
    resolve: {
      modules: [
        'node_modules',
        'app',
        'app/src',
      ],
      extensions: ['.js', '.jsx'],
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: NODE_MODULES,
          use: [
            'babel-loader',
            {
              loader: 'eslint-loader',
              options: {
                configFile: ESLINT_CONFIG,
              },
            },
          ],
        },
        {
          test: /\.(sass|css)$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  minimize: false,
                  importLoaders: 1,
                },
              },
              {
                loader: 'postcss-loader',
                options: {
                  config: {
                    path: POSTCSS_CONFIG,
                  },
                },
              },
              'sass-loader',
            ],
          }),
        },
        {
          test: /\.(svg|png|jpe?g|woff2?)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 10000,
                name: '[path][name].[ext]?[hash]',
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new ExtractTextPlugin('[name].[contenthash].css'),
      new HtmlWebpackPlugin({
        chunks: ['vendor', 'app'],
        chunksSortMode: 'manual',
        template: './app/index.html',
        minify: {
          collapseWhitespace: true,
          removeRedundantAttributes: true,
        },
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: Infinity,
      }),
    ],
  };
};
