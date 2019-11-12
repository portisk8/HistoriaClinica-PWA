const historiasClinicasRepository = require("../Repositories/historiasClinicasRepository");
/*const historiasClinicasModel = require("../models/historiasClinicasModel");*/

module.exports = {
  register: function(req, res) {
  
    var BCRYPT_SALT_ROUNDS = 12;
    bcrypt.hash(req.body.password, BCRYPT_SALT_ROUNDS)
    .then(function(hashedPassword) {
    let user = userModel.UserModel(req.body.dni, req.body.username, hashedPassword);
    return historiasClinicasRepository.obtenerHistoriaClinica
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
