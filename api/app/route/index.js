const express = require('express');
const route = require('.');
const router = express.Router();

const taskController = require("../controllers/TasksController");

router.get("/one-day-multi-task", taskController.one_day);

module.exports = router;