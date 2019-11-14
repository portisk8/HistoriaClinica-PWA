var express = require("express");
var api = express.Router();

const historialTurnosController = require("../controllers/historialTurnosController");

api.get("/historialTurnos/:dni", historialTurnosController.listHistorialTurnos);

module.exports = api;
