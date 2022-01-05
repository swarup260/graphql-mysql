
exports.up = function(knex) {
    return knex.schema
    .createTable('posts', function (table) {
       table.increments('id');
       table.string('name', 255).notNullable();
       table.text('body', 255);
       table.boolean('status', 255);
       table.integer('author').unsigned()
       table.foreign('author').references("id").inTable("users")
       table.timestamps();
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTable("posts");
};
