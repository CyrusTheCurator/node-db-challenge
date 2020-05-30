const express = require("express");
const helmet = require("helmet");
const db = require("./projectsModel");
const server = express();

server.use(helmet());
server.use(express.json());

server.get("/projects", (req, res) => {
  db.getProjects()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch((error) => {
      res.status(500).json(error.message);
    });
});

server.post("/projects", (req, res) => {
  const newProject = req.body;
  db.postProject(newProject)
    .then((project) => {
      res
        .status(200)
        .json({ message: "Project posted successfully", project: project });
    })
    .catch((error) => {
      res.status(500).json(error.message);
    });
});

server.get("/projects/:id", (req, res) => {
  const { id } = req.params;

  db.getProjects(id)
    .then((project) => {
      if (project.length === 0)
        res
          .status(404)
          .json({ message: "404 Error: No project with the given ID exists " });

      res
        .status(200)
        .json({ message: "Success! Your project is: ", project: project });
    })
    .catch((error) => {
      res.status(500).json(error.message);
    });
});

server.post("/projects/:id/resources", (req, res) => {
  const { id } = req.params;

  const newResource = req.body;
  db.postResource(id, newResource)
    .then((resource) => {
      res
        .status(200)
        .json({ message: "Resource posted successfully", resource: resource });
    })
    .catch((error) => {
      res.status(500).json(error.message);
    });
});

server.get("/projects/:id/resources", (req, res) => {
  const { id } = req.params;

  db.getResources(id)
    .then((resource) => {
      res.status(200).json({
        message: `Success! Message contains all resources for project ${id}`,
        resource: resource,
      });
    })
    .catch((error) => {
      res.status(500).json(error.message);
    });
});

server.post("/projects/:id/tasks", (req, res) => {
  const { id } = req.params;
  const resource = req.body;

  db.postTask(id, resource)
    .then((newResource) => {
      res.status(200).json({
        message: "Task posted successfully",
        newResource: newResource,
      });
    })
    .catch((error) => {
      res.status(500).json(error.message);
    });
});

server.get("/projects/:id/tasks", (req, res) => {
  const { id } = req.params;

  db.getTasks(id)
    .then((tasks) => {
      res.status(200).json({
        message: `All tasks associated with project ${id}`,
        tasks: tasks,
      });
    })
    .catch((error) => {
      res.status(500).json(error.message);
    });
});

server.post("/projects/:id/tasks", (req, res) => {
  const { id } = req.params;
  const task = req.body;

  db.postTask(id, task)
    .then((newTask) => {
      res
        .status(200)
        .json({ message: "Task posted successfully", newTasks: newTask });
    })
    .catch((error) => {
      res.status(500).json(error.message);
    });
});

module.exports = server;
