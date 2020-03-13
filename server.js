const express = require("express");
const routerProjects = require("./routers/routerProjects");
const routerActions = require("./routers/routerActions");
const cors = require("cors");

const server = express();

server.use(express.json());
server.use(cors());

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
