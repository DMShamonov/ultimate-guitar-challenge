module.exports = process.env.NODE_ENV === 'production' ? require('./App.prod') : require('./App.dev');
