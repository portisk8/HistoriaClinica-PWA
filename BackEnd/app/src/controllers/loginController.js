const loginModel = require('../models/loginModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    login: function (req,res) {
        let dni = req.body.dni
        loginModel.getUsers(dni).then(user => {
           
    
          bcrypt.compare(req.body.password, user[0].pass, function(err, result){
                if (err) throw err
                if (result) {
                    let token = jwt.sign({ dni: req.body.dni }, 'keyboard', { expiresIn: 129600 }); // Sigining the token                    res.send("ok");
                    let params = {dni: dni, token: token}
                    res.send(params)
                } else {
                    return res.status(401).json({ msg: "Invalid credencial" })
                }
           })
        })
    }
}
