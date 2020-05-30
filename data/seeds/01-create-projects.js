exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("projects").insert([
        {
          name: "Build a starship fleet",
          description: "We need to get 1000 starships to mars",
          completed: false,
        },
        {
          name: "Build a chair warehouse, a chairhouse",
          description: "We need to get 1000 chairs to your front door",
          completed: false,
        },
        {
          name: "Turn the tables",
          description: "We need to rotate the breakroom table 180 degrees",
          completed: false,
        },
      ]);
    });
};
