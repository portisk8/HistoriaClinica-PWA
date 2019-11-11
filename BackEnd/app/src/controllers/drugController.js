const drugModel = require('../models/drugModel');
//const loginRepository = require('../repositories/loginRepository');


module.exports = {
    drug: function (req,res) {
        let drug = drugModel.DrugModel();
        res.send(drug)
      /*  loginRepository.login(login.dni).then(user => {
            
          bcrypt.compare(login.password, user[0][0].pass, function(err, result){
                if (err) throw err
                if (result) {
                    let token = jwt.sign({ dni: login.dni }, 'keyboard', { expiresIn: 129600 }); // Sigining the token                    res.send("ok");
                    let params = {dni: login.dni, token: token}
                    res.send(params)
                } else {
                    return res.status(401).json({ msg: "Invalid credencial" })
                }
           })
        })*/
    }
}
