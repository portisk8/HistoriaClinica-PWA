var express = require('express')
var api = express.Router()

const drugController = require('../controllers/drugController');

api.post('/drogas',drugController.drug);

module.exports = api;