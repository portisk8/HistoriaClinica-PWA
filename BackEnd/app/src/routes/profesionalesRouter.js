var express = require('express')
var api = express.Router()

const profesionalController = require('../controllers/profesionalesController');

api.post('/profesionalPorEspecialidad',profesionalController.obtenerPorEspecialidad);

module.exports = api;
