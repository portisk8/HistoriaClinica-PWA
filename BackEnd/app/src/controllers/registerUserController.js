const users = require("../models/registerRegister");
var bcrypt = require('bcrypt');



module.exports = {
  register: function(req, res) {
    
    var BCRYPT_SALT_ROUNDS = 12;
    bcrypt.hash(req.body.password, BCRYPT_SALT_ROUNDS)
    .then(function(hashedPassword) {
    return users
    .RegisterUser(req.body.dni, req.body.username, hashedPassword)
    .then(data => {
      res.send(data);
    })
    .catch(error => {
      res.send(error);
    });;
})

    
  }
};
