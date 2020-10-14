const express = require("express");

const router = express();

const CoursesRouter = require("./courses.router");
const TypesRouter = require("./types.router");
const UsersRouter = require("./users.router");

router.use(CoursesRouter);
router.use(TypesRouter);
router.use(UsersRouter);

module.exports = router;
