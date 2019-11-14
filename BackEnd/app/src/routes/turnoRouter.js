var express = require("express");
var api = express.Router();

const turnoController = require("../controllers/turnoController");

api.post("/turno", turnoController.turnoGuardar);
api.post("/turno/disponible", turnoController.ultimoDisponibleObtener);
module.exports = api;
