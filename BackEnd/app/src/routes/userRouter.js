var express = require("express");
var api = express.Router();
const bodyParser = require("body-parser");
api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json());

const userController = require("../controllers/userController");

api.post("/registerUser", userController.register);

module.exports = api;
