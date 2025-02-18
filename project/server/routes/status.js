const { Router } = require("express");
const statusController = require("../controller/Status");

const routes = Router();
routes.post("/",statusController.create);

module.exports = routes;
