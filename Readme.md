https://knexjs.org/#Migrations
npm install knex -g
<!-- table.integer('user_id').unique({indexName:'user_unqiue_id', deferrable:'immediate'}) -->
knex migrate:make migration_name // create migration

knex migrate:latest 
knex migrate:latest --env production // using production 

knex migrate:rollback 

knex migrate:rollback --all
