
exports.up = function(knex) {
    return knex.schema
    .createTable('users', function (table) {
       table.increments('id');
       table.string('name', 255).notNullable();
       table.string('email', 255).notNullable();
       table.string('password', 255).notNullable();
       table.string('username', 255).notNullable();
       table.timestamps();
       table.unique('email')
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTable("users");
};
