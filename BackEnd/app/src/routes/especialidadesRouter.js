var express = require("express");
var api = express.Router();

const especialidadController = require("../controllers/especialidadController");

api.get("/especialidades", especialidadController.listEspecialidades);

module.exports = api;
