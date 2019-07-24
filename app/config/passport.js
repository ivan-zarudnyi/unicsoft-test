module.exports = function (app) {
  // load strategies
  require('./strategies/local')(app);
  require('./strategies/jwt')(app);
};