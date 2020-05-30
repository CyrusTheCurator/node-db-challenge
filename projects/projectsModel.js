const db = require("../db-config");

module.exports = {
  getProjects,
  getResources,
  postProject,
  postResource,
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
    return db("resources").where({ id });
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
function postResource(resource) {
  return db("resources")
    .insert(resource)
    .then((resourceIdArr) => {
      return getProjects(resourceIdArr[0]);
    });
}
