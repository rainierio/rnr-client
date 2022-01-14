const { createProxyMiddleware }  = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://3.13.224.4/',
      changeOrigin: true,
    })
  );
};