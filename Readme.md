https://knexjs.org/#Migrations
npm install knex -g
<!-- table.integer('user_id').unique({indexName:'user_unqiue_id', deferrable:'immediate'}) -->
knex migrate:make migration_name // create migration

knex migrate:latest 
knex migrate:latest --env production // using production 

knex migrate:rollback 

knex migrate:rollback --all



docker-compose  -f ./docker-compose.yml -f ./docker-compose-dev.yml up --build -d --remove-orphans 
#inital build container and run in detach mode

docker-compose  -f ./docker-compose.yml -f ./docker-compose-dev.yml up -d # run in detach mode

docker-compose  -f ./docker-compose.yml -f ./docker-compose-dev.yml down -v #kill runing instance


> Taking for granted you have shown your entire start log, it appears you started your mysql container against a pre-existing db_data volume already containing a mysql database filesystem.

In this case, absolutely nothing will be initialized on container start and environment variables are useless. Quoting the official image documentation in the "Environment Variables" section:

Do note that none of the variables below will have any effect if you start the container with a data directory that already contains a database: any pre-existing database will always be left untouched on container startup.

If you want your instance to be initialized, you have to start from scratch. It is quite easy to do with docker compose when using a named volume like in your case. Warning: this will permanently delete the contents in your db_data volume, wiping out any previous database you had there. Create a backup first if you need to keep the contents.

docker-compose down -v
docker-compose up -d
If you ever convert to a bind mount, you will have to delete all it's content yourself (i.e. rm -rf /path/to/bind/mount/*)

Note: many other official db docker images (postgres, mongo....) work a similar way.