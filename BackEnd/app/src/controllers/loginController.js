const loginModel = require('../models/loginModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    login: function (req,res) {
        loginModel.getUsers(9).then(user => {
           // res.send(user[0].pass)
          bcrypt.compare(req.body.password, user[0].pass, function(err, result){
                if (err) throw err
                if (result) {
                    let token = jwt.sign({ username: req.body.username }, 'keyboard', { expiresIn: 129600 }); // Sigining the token                    res.send("ok");
                    res.send(token)
                } else {
                    return res.status(401).json({ msg: "Invalid credencial" })
                }
           })
        })
    }
}
