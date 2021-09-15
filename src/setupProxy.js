const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://rainierioapi-env-2.eba-zgumuuwf.ap-southeast-2.elasticbeanstalk.com//',
      changeOrigin: true,
    })
  );
};