const loginModel = require('../models/loginModel');
var bcrypt = require('bcrypt');

module.exports = {
    login: function (req,res) {
        loginModel.getUsers(9).then(user => {
           // res.send(user[0].pass)
          bcrypt.compare(req.body.password, user[0].pass, function(err, result){
                if (err) throw err
                if (result) {
                    return res.status(200).json({ msg: "Login success" })
                } else {
                    return res.status(401).json({ msg: "Invalid credencial" })
                }
           })
        })
    }
}
