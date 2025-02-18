const { Router } = require("express");
const taskController = require("../controller/task");
const routes = Router();
routes.post("/", taskController.create);
routes.get("/", taskController.getAllTask);
routes.get("/:taskId", taskController.getTaskById)
module.exports = routes;
