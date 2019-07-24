const passport = require('passport');

const passportJWT = require("passport-jwt");

const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const User = require('../../models/User');

module.exports = app => {
  passport.use(new JWTStrategy({
      jwtFromRequest: ExtractJWT.fromHeader('authorization'),
      secretOrKey: app.config.jwt_secret
    },
    function (jwtPayload, cb) {
      if (jwtPayload.expires < new Date().getTime()) {
        return cb(null, false);
      }
      User.query().findById(jwtPayload.id).then(cb).catch(cb);
    }
  ));
};
