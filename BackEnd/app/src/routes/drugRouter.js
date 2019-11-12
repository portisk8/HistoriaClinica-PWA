var express = require('express')
var api = express.Router()

const drugController = require('../controllers/drugController');

api.get('/drogas/:dni',drugController.drug);

module.exports = api;