var express = require('express')
var api = express.Router()
const bodyParser = require('body-parser');
api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json());

const drugsController = require('../controllers/requestDrugController');

api.post('/requestDrugs',drugsController.requestDrugs);

module.exports = api;