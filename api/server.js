require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

console.log("Test change");

var corsOptions = {
  origin: process.env.CLIENT_ORIGIN || "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");

db.sequelize.sync();

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to UWC hehe 2.0 !!" });
});