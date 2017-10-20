module.exports = function webpackConfig(env) {
  return require(`./config/webpack/webpack.${env}.config.js`)({ env: env });
};
