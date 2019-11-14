const usuarioRepository = require("../repositories/usuarioRepository");
const userModel = require("../models/userModel");
const loginModel = require("../models/loginModel");
var bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  registrar: function(req, res) {
    var BCRYPT_SALT_ROUNDS = 12;
    bcrypt
      .hash(req.body.password, BCRYPT_SALT_ROUNDS)
      .then(function(hashedPassword) {
        let user = userModel.UserModel(
          req.body.dni,
          req.body.username,
          hashedPassword
        );
        return usuarioRepository
          .crear(user)
          .then(data => {
            res.send(data);
          })
          .catch(error => {
            res.send(error);
          });
      });
  },
  login: function(req, res) {
    let login = loginModel.LoginModel(req.body.dni, req.body.password);

    usuarioRepository.login(login.dni).then(user => {
      bcrypt.compare(login.password, user[0][0].pass, function(err, result) {
        if (err) throw err;
        if (result) {
          let token = jwt.sign({ dni: login.dni }, "keyboard", {
            expiresIn: 129600
          }); // Sigining the token                    res.send("ok");
          let params = { dni: login.dni, token: token };
          res.send(params);
        } else {
          return res.status(401).json({ msg: "Invalid credencial" });
        }
      });
    });
  }
};
