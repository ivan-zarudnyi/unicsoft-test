module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: __dirname + '/sqlite3.db'
    },
    useNullAsDefault: true,
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
