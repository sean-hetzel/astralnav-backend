const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const usersRouter = require("./routes/users");
const applicationsRouter = require("./routes/applications")

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/users", usersRouter);
app.use("/applications", applicationsRouter)

module.exports = app;
