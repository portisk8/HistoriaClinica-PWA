var express = require('express')
var api = express.Router()

const historialClinicoController = require('../controllers/historialClinicoController');

api.get('/historialesClinicos/:dni',historialClinicoController.obtenerHistoriaClinica);

module.exports = api;
