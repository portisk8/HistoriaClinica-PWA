var express = require("express");
var api = express.Router();

const historialController = require("../controllers/historialController");

api.get("/historiales/drogas/:dni", historialController.historialDrogas);
api.get("/historiales/turnos/:dni", historialController.historialTurnos);
api.get("/historiales/clinicos/:dni",historialController.obtenerHistoriaClinica);

module.exports = api;
