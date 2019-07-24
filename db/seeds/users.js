
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {login:'ivan', name: 'ivan z', password: 'd32f371094704c728686a8c0e80292fdcfe34f5d7c7b6e3cbc07795b3440a448280a738065503e19bcde00a8de20f79402e583688fdeb452c121f5a53082bed87fdb039cdec98a26397e8cabe3d97d1c37c6a0ee172fb6350da1756432d4bc0d7f7622eb0c662e6c49fb83e6f69f8966eda5f1aea56d1b1d1717edb24545a771', password_salt: 'b9620f8a4d140ee367bca64242c3e3cb2f26f4893b510c7af7b03dc98a3bead8'},
        //decrypted password 'test'
      ]);
    });
};
