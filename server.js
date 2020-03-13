const express = require("express");
const routerProjects = require("./routers/routerProjects");
const routerActions = require("./routers/routerActions");
const cors = require("cors");

const server = express();

server.use(express.json());
server.use(cors());

server.use("/projects", routerProjects);
server.use("/actions", routerActions);

module.exports = server;
