exports.up = function (knex) {
  return knex.schema
    .createTable("projects", (tbl) => {
      tbl.increments("id");
      tbl.string("name");
      tbl.string("description");
      tbl.boolean("completed").notNullable().defaultTo(false);
    })
    .createTable("resources", (tbl) => {
      tbl.increments("id");
      tbl.string("name");
      tbl.string("description");
    })
    .createTable("tasks", (tbl) => {
      tbl.increments("id");
      tbl.string("description");
      tbl.string("notes");
      tbl.boolean("completed").notNullable().defaultTo(false);
    })
    .createTable("project_tasks", (tbl) => {
      tbl
        .integer("project_id")
        .notNullable()
        .unsigned()
        .references("projects.id");
      tbl.integer("task_id").notNullable().unsigned().references("tasks.id");

      tbl.primary(["project_id", "task_id"]);
    })
    .createTable("project_resources", (tbl) => {
      tbl
        .integer("project_id")
        .notNullable()
        .unsigned()
        .references("projects.id");
      tbl
        .integer("resource_id")
        .notNullable()
        .unsigned()
        .references("resources.id");

      tbl.primary(["project_id", "resource_id"]);
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("project_resources")
    .dropTableIfExists("project_tasks")
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");
};
