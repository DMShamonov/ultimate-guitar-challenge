const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use([
    createProxyMiddleware('/api', {
      target: 'http://musicbrainz.org/ws/2',
      pathRewrite: { '^/api': '' },
      changeOrigin: true,
    }),
  ]);
};
