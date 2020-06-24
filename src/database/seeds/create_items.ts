import Knex from "knex";

// Send these info to the database.
export async function seed(knex: Knex) {
  await knex("items").insert([
    { title: "Lamp", image: "lamp.svg" },
    { title: "Batteries", image: "battery.svg" },
    { title: "Cardboard", image: "cardboard.svg" },
    { title: "Electronic Waste", image: "electronics.svg" },
    { title: "Organic Waste", image: "organic.svg" },
    { title: "Cooking Oil", image: "oil.svg" },
  ]);
}
