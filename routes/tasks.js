const express = require("express");
const tasksController = require("../controllers/tasksController");

let router = express.Router();

const user = {
  "username":"admin",
  "password":"admin"
}
const isAdmin = () => {
  if()
};

router.get("/", (req, res) => tasksController.getTasks(req, res));

router.post("/add", (req, res) => tasksController.postTask(req, res));

router.put("/edit/:id", (req, res) => tasksController.putTask(req, res));

router.delete("/delete/:id", (req, res) => {});

module.exports = router;
