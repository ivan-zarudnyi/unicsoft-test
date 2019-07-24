const AbstractController = require('./AbstractController');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const moment = require('moment');

class UsersController extends AbstractController {
  async login(req, res) {
    return new Promise((resolve, reject) => {
      passport.authenticate('local', function (err, user) {
        if (err || !user) {
          reject(err || {message: "Invalid username or password"});
          return;
        }
        const token = jwt.sign({
          id: user.id,
          expires: moment().add(1, 'day').toDate().getTime()
        }, app.config.jwt_secret);

        res.json({user, token});
        resolve();
      })(req, res);
    });
  }

  async whoami(req, res) {
    res.json(req.user);
  }
}

module.exports = UsersController;