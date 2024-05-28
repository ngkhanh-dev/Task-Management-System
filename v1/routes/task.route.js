const express = require("express");
const router = express.Router();

const taskController = require("../controllers/task.controller");

router.get("/", taskController.index);

router.get("/detail/:id", taskController.index2);

module.exports = router;