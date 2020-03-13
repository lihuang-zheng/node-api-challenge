const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const routerProjects = require("./routers/routerProjects");
const routerActions = require("./routers/routerActions");

const server = express();

server.use(cors());
server.use(express.json());
server.use(helmet());

server.use("/api/projects", routerProjects);
server.use("/api/actions", routerActions);

server.get("/", (req, res) => {
  console.log("Project server running.");
  res.send("<h1>Project Server Base</h1>");
});

server.get("/api", (req, res) => {
  console.log("Project server running.");
  res.send("<h1>Project Server API</h1>");
});

module.exports = server;
