const { createProxyMiddleware }  = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      //target: 'https://rainierio-api-svc.online/',
      target: 'http://localhost:5000/',
      changeOrigin: true,
    })
  );
};