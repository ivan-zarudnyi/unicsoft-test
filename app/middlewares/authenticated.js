const passport = require('passport');

module.exports = function (req, res, next) {
  passport.authenticate('jwt', function (err, user) {
    if (err || !user) {
      res.status(401);
      return res.json(err || {message: 'Unauthorized'});
    }
    req.user = user;
    next();
  })(req, res);

};
