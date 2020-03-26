exports.up = function(knex) {
  return knex.schema.createTable("increments", function(table) {
    table.increments();
    table.string("title").notNullable();
    table.string("descrition").notNullable();
    table.decimal("vakue").notNullable();

    table.string("ong_id").notNullable();

    table
      .foreign("ong_id")
      .references("id")
      .inTable("ongs");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("incidents");
};
