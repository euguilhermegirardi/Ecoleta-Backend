// Relation of items that the one point collect.

import Knex from "knex";

export async function up(knex: Knex) {
  // Create the table
  return knex.schema.createTable("points_items", (table) => {
    table.increments("id").primary();

    table.integer("point_id").notNullable().references("id").inTable("points");

    table.integer("item_id").notNullable().references("id").inTable("items");
  });
}

export async function down(knex: Knex) {
  // Go back (delete the table)
  return knex.schema.dropTable("points_items");
}
