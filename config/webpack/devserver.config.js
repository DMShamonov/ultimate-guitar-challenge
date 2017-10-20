const apiUrl = 'http://musicbrainz.org/ws/2';

module.exports = {
  host: '0.0.0.0',
  compress: true,
  historyApiFallback: {
    disableDotRule: true,
  },
  disableHostCheck: true,
  quiet: false,
  noInfo: false,
  stats: {
    chunks: false,
    colors: true,
  },
  proxy: {
    '/api': {
      target: apiUrl,
      changeOrigin: true,
    },
  },
};
