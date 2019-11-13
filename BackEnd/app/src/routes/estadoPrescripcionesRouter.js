var express = require('express')
var api = express.Router()

const estadoPrescripcionesController = require('../controllers/estadoPrescripcionesController');

api.post('/prescripciones',estadoPrescripcionesController.Prescripciones);

module.exports = api;
