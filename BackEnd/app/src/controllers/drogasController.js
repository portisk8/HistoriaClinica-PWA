//const drugModel = require('../models/drugModel');
const drogasRepository = require('../repositories/drogasRepository');


module.exports = {
    drograsNoEntregadas: function (req,res) {
        let dni = req.params.dni;
        return drogasRepository
        .noEntregadasObtener(dni)
        .then(data => {
          res.send(data);
        })
        .catch(error => {
          res.send(error);
        }); 
    }
}
