require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

const port = 6868;

app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
const MCPController = require("./app/controllers/MCPController");

db.sequelize.sync();

// simple route
// route(app);

console.log(__dirname);

app.get("/mcp-detail", MCPController.MCP_detail);

const PORT = process.env.NODE_DOCKER_PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});