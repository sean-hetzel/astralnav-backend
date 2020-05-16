const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");

const app = express();

const usersRouter = require("./routes/users");
const applicationsRouter = require("./routes/applications");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get('/', (req, res) => {
  res.send('Home')
})

app.use("/users", usersRouter);
app.use("/applications", applicationsRouter);

mongoose.connect(process.env.DB_CONNECTION, () =>
  console.log("Connected to DB")
);

module.exports = app;
