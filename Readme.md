https://knexjs.org/#Migrations
npm install knex -g

knex migrate:make migration_name // create migration

knex migrate:latest 
knex migrate:latest --env production // using production 

knex migrate:rollback 

knex migrate:rollback --all
