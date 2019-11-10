const userRepository = require("../Repositories/userRepository");
const userModel = require("../models/userModel");
var bcrypt = require('bcrypt');

module.exports = {
  register: function(req, res) {
  
    var BCRYPT_SALT_ROUNDS = 12;
    bcrypt.hash(req.body.password, BCRYPT_SALT_ROUNDS)
    .then(function(hashedPassword) {
    let user = userModel.UserModel(req.body.dni, req.body.username, hashedPassword);
    return userRepository
    .CreateUser(user)
    .then(data => {
      res.send(data);
    })
    .catch(error => {
      res.send(error);
    });;
})

    
  }
};
