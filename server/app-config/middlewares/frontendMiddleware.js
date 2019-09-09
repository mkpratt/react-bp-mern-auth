/* eslint-disable global-require */
const proxy = require('http-proxy-middleware')

/**
 * Front-end middleware
 */
module.exports = (app, options) => {
  const isProd = process.env.NODE_ENV === 'production';

  if (isProd) {
    const addProdMiddlewares = require('./addProdMiddlewares');
    addProdMiddlewares(app, options);
  } else {
    const webpackConfig = require('../../../internals/webpack/webpack.dev.babel');
    const addDevMiddlewares = require('./addDevMiddlewares');
    addDevMiddlewares(app, webpackConfig);
  }

  // Connect to proxy api endpoint
  const apiProxy = proxy('/api', { target: 'http://localhost:5000' })
  app.use('/api', apiProxy)

  return app;
};
