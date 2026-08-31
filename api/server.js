require("dotenv").config();
const express = require("express");
const cors = require("cors");

const taskController = require("./app/controllers/TasksController");
const VehicleControl = require("./app/controllers/VehicleController");
const areaController = require("./app/controllers/AreasController");
const teamController = require("./app/controllers/TeamController");

const app = express();
app.use(cors());

const port = 6868;

app.use(express.json());
app.use(cors());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
const MCPController = require("./app/controllers/MCPController");

db.sequelize.sync();

// simple route
// route(app);

console.log(__dirname);

// Calender page
app.get("/", taskController.calendar_page);
app.get("/home", taskController.calendar_page);
app.get("/calender", taskController.calendar_page);

// Vehicle
app.get("/vehicle-info",VehicleControl.Vehicle_info);

// Return multiple task
app.get("/one-day-multi-task", taskController.one_day)
app.get("/task-info", taskController.one_day)

// Area
app.get("/area-info", areaController.area_info);

// Team
app.get("/team-info", teamController.team_info);

// MCPs
app.get("/MCP-detail", MCPController.MCP_detail);

const PORT = process.env.NODE_DOCKER_PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});