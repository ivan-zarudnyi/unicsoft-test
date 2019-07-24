const express = require('express');

const UsersController = require('../controllers/UsersController');
const authenticated = require('../middlewares/authenticated');

module.exports = function (app) {
  const router = express.Router();

  router.post('/login', UsersController.action('login'));
  router.get('/users/whoami', authenticated, UsersController.action('whoami'));
  app.use('/api/v1/', router);
};

