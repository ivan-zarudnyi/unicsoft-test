module.exports = function (app) {
  const env = process.env.NODE_ENV || 'development';
  app.config = require(`./env/${env}`.toLowerCase());

  require('./router')(app);
  require('./log')(app);
  require('./db')(app);
  require('./passport')(app);
};