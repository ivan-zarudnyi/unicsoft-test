const AbstractModel = require('./AbstractModel');
const passwordHelper = require('./../helpers/password_helper');

class User extends AbstractModel {
  static get tableName() {
    return 'users';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['title', 'state'],

      properties: {
        id: {type: 'integer'},
        name: {type: 'string'},
        password: {type: 'string'},
        password_salt: {type: 'string'},
      }
    };
  }

  static async authenticate(login, password) {
    const user = await this.query().findOne({login});
    if (!user) {
      throw {message: 'User not found'};
    }
    const result = await passwordHelper.verifyPassword(password, user.password, user.password_salt);
    if (result === false) {
      throw {message: 'Invalid username or password.'};
    }
    return user;
  };

}

module.exports = User;
