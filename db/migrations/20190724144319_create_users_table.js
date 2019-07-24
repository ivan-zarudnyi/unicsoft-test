
exports.up = function(knex) {
  return knex.schema.createTable('users', function(table) {
    table.increments().unsigned().primary();
    table.string('name').notNull();
    table.string('login').notNull();
    table.string('password').notNull();
    table.string('password_salt').notNull();
    table.timestamps(true, true);
  });

};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
