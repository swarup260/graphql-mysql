// Update with your config settings.
require('./utils/config')
module.exports = {

  development: {
    client: process.env.KNEX_CLIENT,
    connection: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT_MYSQL,
        user: process.env.DB_USER_MYSQL,
        password: process.env.DB_PASSWORD_MYSQL,
        database: process.env.DB_DATABASE_MYSQL
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
