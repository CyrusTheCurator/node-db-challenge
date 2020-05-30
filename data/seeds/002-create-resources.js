exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("resources").insert([
        { name: "chair", description: "that's a mighty fine chair" },
        { name: "table", description: "that's a mighty fine table" },
        { name: "starship", description: "that's a mighty fine starship" },
      ]);
    });
};
