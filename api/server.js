require("dotenv").config();
const express = require("express");
const cors = require("cors");

const taskController = require("./app/controllers/TasksController");
const areaController = require("./app/controllers/AreasController");

const app = express();

const port = 6868;

app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");

db.sequelize.sync();

// simple route
// route(app);

console.log(__dirname);

// Calender page
app.get("/", taskController.calendar_page);
app.get("/home", taskController.calendar_page);
app.get("/calender", taskController.calendar_page);

// Return multiple task
app.get("/one-day-multi-task", taskController.one_day)
app.get("/task-info", taskController.one_day)

// Area
app.get("/area-info", areaController.area_info);


const PORT = process.env.NODE_DOCKER_PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});