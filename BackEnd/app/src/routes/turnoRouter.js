var express = require("express");
var api = express.Router();

const turnoController = require("../controllers/turnoController");

api.get("/turno", turnoController.listTurno);

module.exports = api;
