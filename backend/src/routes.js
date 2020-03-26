const express = require("express");
const OngController = require("./controllers/ongsController");
const incidentsController = require("./controllers/incidentsController");
const sessionController = require("./controllers/sessionController");
const routes = express.Router();

routes.post("/sessions", sessionController.create);

routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.create);

routes.get("/profiler", profileController.index);

routes.get("/incidents", incidentsController.index);
routes.post("/incidents", incidentsController.create);
routes.delete("/incidents/:id", incidentsController.delete);

module.exports = routes;
