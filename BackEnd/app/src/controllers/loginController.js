const loginModel = require('../models/loginModel');
const loginRepository = require('../repositories/loginRepository');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    login: function (req,res) {
        let login = loginModel.LoginModel(req.body.dni, req.body.password);
    
        loginRepository.login(login.dni).then(user => {
          bcrypt.compare(login.password, user[0].pass, function(err, result){
                if (err) throw err
                if (result) {
                    let token = jwt.sign({ dni: login.dni }, 'keyboard', { expiresIn: 129600 }); // Sigining the token                    res.send("ok");
                    let params = {dni: login.dni, token: token}
                    res.send(params)
                } else {
                    return res.status(401).json({ msg: "Invalid credencial" })
                }
           })
        })
    }
}
