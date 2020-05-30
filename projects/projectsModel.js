const db = require("../db-config");

module.exports = {
  getProjects,
  getResources,
  postProject,
  postResource,
  postTask,
  getTasks,
};
//helpers go here
function getProjects(id) {
  if (id) {
    return db("projects").where({ id });
  } else {
    return db("projects");
  }
}

function getResources(id) {
  if (id) {
    return db("resources").where({ project_id: id });
  } else {
    return db("resources");
  }
}
function postProject(project) {
  return db("projects")
    .insert(project)
    .then((projectIdArr) => {
      return getProjects(projectIdArr[0]);
    });
}
function postResource(project_id, resource) {
  resource.project_id = project_id;
  return db("resources")
    .insert(resource)
    .then((resourceIdArr) => {
      return getResources(resourceIdArr[0]);
    });
}

function getTasks(project_id) {
  return db("tasks")
    .where({ project_id })
    .join("projects as p", "p.id", "tasks.project_id")
    .select("p.name", "p.description", "tasks.task_description", "tasks.notes");
}

function postTask(project_id, task) {
  task.project_id = project_id;

  return db("tasks")
    .insert(task)
    .then((taskIdArr) => {
      return getTasks(project_id);
    });
}
