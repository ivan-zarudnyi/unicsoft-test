const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../../models/User');

module.exports = app => {
  passport.use('local', new LocalStrategy({
      usernameField: 'username',
      passwordField: 'password'
    },
    function (email, password, done) {
      User.authenticate(email, password).then(user => {
        return done(null, user);
      }).catch(err => {
        return done(err);
      });
    }
  ));
};