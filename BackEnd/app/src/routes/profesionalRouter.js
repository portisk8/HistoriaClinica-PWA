var express = require("express");
var api = express.Router();

const profesionalController = require("../controllers/profesionalController");

api.get(
  "/profesionales/:especialidad",
  profesionalController.obtenerPorEspecialidad
);

module.exports = api;
