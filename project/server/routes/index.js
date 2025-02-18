const { Router } = require("express");
const userRoutes = require("./user");
const taskRoutes = require("./task");
const statusRoutes = require("./status");
const routes = Router();
routes.use("/users", userRoutes);
routes.use("/task", taskRoutes);
routes.use("/status", statusRoutes);
module.exports = routes;
