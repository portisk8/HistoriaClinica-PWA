var express = require("express");
var api = express.Router();
const bodyParser = require("body-parser");
api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json());

const usuarioController = require("../controllers/usuarioController");

api.post("/usuarios/registrar", usuarioController.registrar);
api.post("/usuarios/login", usuarioController.login);

module.exports = api;
