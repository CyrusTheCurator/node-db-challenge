exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("resources").insert([
        {
          name: "chair",
          resource_description: "that's a mighty fine chair",
          project_id: 2,
        },
        {
          name: "table",
          resource_description: "that's a mighty fine table",
          project_id: 3,
        },
        {
          name: "starship",
          resource_description: "that's a mighty fine starship",
          project_id: 1,
        },
      ]);
    });
};
