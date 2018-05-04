require('babel-register');

const env = process.env.NODE_ENV || 'development';

module.exports = function() {
  if (env === 'production') {
    return require('./webpack/prod').default;
  } else {
    return require('./webpack/dev').default;
  }
}