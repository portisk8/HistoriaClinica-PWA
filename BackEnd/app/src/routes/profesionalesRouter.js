var express = require('express')
var api = express.Router()

const infoProfesionalController = require('../controllers/infoProfesionalController');

api.get('/infoprofesional',infoProfesionalController.listInfoProfesional);

module.exports = api;
