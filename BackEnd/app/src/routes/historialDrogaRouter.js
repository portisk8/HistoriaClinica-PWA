var express = require("express");
var api = express.Router();

const historialDrogasController = require("../controllers/historialDrogaController");

api.get("/historialDrogas/:dni", historialDrogasController.HistorialDrogas);

module.exports = api;
