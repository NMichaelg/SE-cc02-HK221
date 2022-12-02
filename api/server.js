require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

const port = 6868;

const TaskControl = require("./app/controllers/TasksController.js")
// var corsOptions = {
//   origin: process.env.CLIENT_ORIGIN || "http://localhost:8081"
// };

// app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");

db.sequelize.sync();

// simple route
app.get("/calendar", TaskControl.calendar_page);

const PORT = process.env.NODE_DOCKER_PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});