const express = require("express");
const helmet = require("helmet");

const db = require("./projects/projectsModel");
const projectsRouter = require("./projects/projectsRouter");
const server = express();

server.use(helmet());
server.use(express.json());
server.use("/", projectsRouter);

module.exports = server;
