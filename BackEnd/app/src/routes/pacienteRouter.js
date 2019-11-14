var express = require('express')
var api = express.Router()
const bodyParser = require('body-parser');
api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json());

const pacientesController = require('../controllers/pacientesController');

api.post('/pacientes/registrar',pacientesController.registrar);
api.put('/pacientes/prescripciones',pacientesController.prescripcionesEstadoCambiar);

module.exports = api;