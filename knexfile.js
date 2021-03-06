require('dotenv').config()
module.exports = {
  development: {
    client: process.env.KNEX_CLIENT,
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT_MYSQL,
      user: process.env.DB_USER_MYSQL,
      password: process.env.DB_PASSWORD_MYSQL,
      database: process.env.DB_DATABASE_MYSQL
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  staging: {
    client: process.env.KNEX_CLIENT,
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT_MYSQL,
      user: process.env.DB_USER_MYSQL,
      password: process.env.DB_PASSWORD_MYSQL,
      database: process.env.DB_DATABASE_MYSQL
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
    client: process.env.KNEX_CLIENT,
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT_MYSQL,
      user: process.env.DB_USER_MYSQL,
      password: process.env.DB_PASSWORD_MYSQL,
      database: process.env.DB_DATABASE_MYSQL
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

module.exports = {
  development: {
    client: process.env.KNEX_CLIENT,
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT_MYSQL,
      user: process.env.DB_USER_MYSQL,
      password: process.env.DB_PASSWORD_MYSQL,
      database: process.env.DB_DATABASE_MYSQL
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  staging: {
    client: process.env.KNEX_CLIENT,
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT_MYSQL,
      user: process.env.DB_USER_MYSQL,
      password: process.env.DB_PASSWORD_MYSQL,
      database: process.env.DB_DATABASE_MYSQL
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
    client: process.env.KNEX_CLIENT,
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT_MYSQL,
      user: process.env.DB_USER_MYSQL,
      password: process.env.DB_PASSWORD_MYSQL,
      database: process.env.DB_DATABASE_MYSQL
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
