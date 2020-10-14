const express = require("express");

const { CoursesController } = require("../controllers");

const routes = express();

routes.post("/course/:user_id", CoursesController.store);

module.exports = routes;
