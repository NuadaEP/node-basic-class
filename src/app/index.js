const express = require("express");
const mongoose = require("mongoose");

const router = require("./routes");

const app = express();

mongoose.connect("mongodb://localhost:27017/node-project", {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(express.json());

app.use(router);

module.exports = app;
