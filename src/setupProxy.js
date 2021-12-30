const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://108.136.90.251/:5000',
      changeOrigin: true,
    })
  );
};