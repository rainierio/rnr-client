const { createProxyMiddleware }  = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://rainierio-api-svc.online/',
      changeOrigin: true,
    })
  );
};