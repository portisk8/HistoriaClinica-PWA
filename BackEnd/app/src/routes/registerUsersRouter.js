var express = require('express')
var api = express.Router()
const bodyParser = require('body-parser');
api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json());

const RegisterController = require('../controllers/registerUserController');

api.post('/registerUser',RegisterController.register);

module.exports = api;