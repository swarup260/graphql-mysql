// env
require('./config')
const knex = require('knex')({
    client: process.env.KNEX_CLIENT,
    connection: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT_MYSQL,
        user: process.env.DB_USER_MYSQL,
        password: process.env.DB_PASSWORD_MYSQL,
        database: process.env.DB_DATABASE_MYSQL
    }
});


module.exports = knex
