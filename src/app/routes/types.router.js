const express = require("express");

const { TypesController } = require("../controllers");

const routes = express();

routes.get("/types", TypesController.index);

module.exports = routes;
