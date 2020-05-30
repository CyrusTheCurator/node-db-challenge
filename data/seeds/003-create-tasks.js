exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          task_description:
            "Grab the table by its leading edge and utilize leverage",
          notes: "do you really need more instructions?",
          completed: false,
          project_id: 3,
        },
        {
          task_description:
            "Take your prototype starship and just build it again 1000 times. Should be easy, right?",
          notes: "??? profit?",
          completed: false,
          project_id: 1,
        },
        {
          task_description:
            "Withdraw your life savings and head down to your local office supply store to purchase the most expensive chair they sell",
          notes: "enjoy your luxurious purchase",
          completed: false,
          project_id: 2,
        },
      ]);
    });
};
