var express = require('express')
var api = express.Router()

const drugController = require('../controllers/drugController');

api.get('/drogas',drugController.drug);

module.exports = api;