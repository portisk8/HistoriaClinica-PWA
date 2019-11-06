const loginModel = require('../models/loginModel');

module.exports = {
    login: function (req,res) {
        let users = {

        }

        loginModel.items.forEach(element => {
            if(req.body.username == element.username){
                users = {
                    username: req.body.username,
                    password: req.body.password
                }
            }
        });

        res.send(users);
    
        
         
              
    }
}