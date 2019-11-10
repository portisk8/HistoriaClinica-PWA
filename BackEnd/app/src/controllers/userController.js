const userRepository = require("../Repositories/userRepository");
const userModel = require("../models/userModel");
var bcrypt = require('bcrypt');

module.exports = {
  register: function(req, res) {
  
   let user = userModel.UserModel(req.body.dni, req.body.username, req.body.password);
    var BCRYPT_SALT_ROUNDS = 12;
    bcrypt.hash(user.password, BCRYPT_SALT_ROUNDS)
    .then(function(hashedPassword) {
    return userRepository
    .CreateUser(user.dni, user.username, hashedPassword)
    .then(data => {
      res.send(data);
    })
    .catch(error => {
      res.send(error);
    });;
})

    
  }
};
