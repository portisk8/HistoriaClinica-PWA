var express = require('express')
var api = express.Router()
const bodyParser = require('body-parser');
api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json());

const patientController = require('../controllers/patientController');

api.post('/registerPatient',patientController.registerPatient);

module.exports = api;