const express = require("express");
const helmet = require("helmet");
const db = require("./projectsModel");
const server = express();

server.use(helmet());
server.use(express.json());

server.get("/projects", (req, res) => {
  console.log("we projecting");
  db.getProjects()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch((error) => {
      res.status(500).json(error.message);
    });
});

server.post("/projects", (req, res) => {
  console.log("adding project");
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

server.post("/projects", (req, res) => {
  console.log("adding project");
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

server.get("/resources", (req, res) => {
  db.getResources()
    .then((resources) => {
      res.status(200).json(resources);
    })
    .catch((error) => {
      res.status(500).json(error.message);
    });
});

module.exports = server;
