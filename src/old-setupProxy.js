const proxy = require("http-proxy-middleware");

module.exports = app => {
  app.use(proxy("/api/*", { target: "http://origin.eba-awajfifh.ap-southeast-2.elasticbeanstalk.com/" }));
};