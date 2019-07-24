const LEN = 256;
const SALT_LEN = 64;
const ITERATIONS = 10000;
const DIGEST = 'sha256';

const crypto = require('crypto-promise');

module.exports = {
  async hashPassword(password, salt) {
    const len = LEN / 2;

    if (!salt) {
      salt = await crypto.randomBytes(SALT_LEN / 2);
      salt = salt.toString('hex');
    }
    let derivedKey = await crypto.pbkdf2(password, salt, ITERATIONS, len, DIGEST);

    return {
      hash: derivedKey.toString('hex'),
      salt: salt
    };
  },

  async verifyPassword(password, hash, salt) {
    let result = await this.hashPassword(password, salt);

    return result.hash === hash;
  }

};
