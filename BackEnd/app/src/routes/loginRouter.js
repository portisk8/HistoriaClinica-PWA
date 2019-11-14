var express = require("express");
var api = express.Router();
const bodyParser = require("body-parser");
api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json());

const loginController = require("../controllers/loginController");

api.post("/login", loginController.login);

module.exports = api;
