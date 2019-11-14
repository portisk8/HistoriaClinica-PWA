var express = require('express')
var api = express.Router()

const drogaController = require('../controllers/drogasController');

api.get('/drogas/:dni',drogaController.drograsNoEntregadas);

module.exports = api;