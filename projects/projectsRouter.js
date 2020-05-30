const express = require("express");
const helmet = require("helmet");
const db = require("./projectsModel");
const server = express();

server.use(helmet());
server.use(express.json());

server.get("/", (req, res) => {
  // get all species from the database

  console.log("we in here,");
  db.getRecipes()
    .then((recipes) => {
      res.status(200).json(recipes);
    })
    .catch((error) => {
      res.status(500).json(error.message);
    });
});

module.exports = server;
