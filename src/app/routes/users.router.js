const express = require("express");

const { UsersController } = require("../controllers");

const routes = express();

routes.get("/users", UsersController.index);

routes.post("/users", UsersController.store);

module.exports = routes;
