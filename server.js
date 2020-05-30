const express = require("express");
const helmet = require("helmet");

const db = require("./data/models/recipes_model");
const recipeRouter = require("./recipes/recipeRouter");
const server = express();

server.use(helmet());
server.use(express.json());
server.use("/", projectsRouter);

module.exports = server;
