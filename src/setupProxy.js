const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://origin.eba-awajfifh.ap-southeast-2.elasticbeanstalk.com/',
      changeOrigin: true,
    })
  );
};