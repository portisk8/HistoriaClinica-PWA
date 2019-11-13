const estadoPrescripcionesRepository = require('../repositories/estadoPrescripcionesRepository');
const estadoPrescripcionesModel = require('../models/cambiarEstadoPrescripciones');

module.exports = {
    Prescripciones: function (req, res) {
        let prescripciones = estadoPrescripcionesModel.PrescripcionesModel(req.body.dni, req.body.droga, req.body.drogueria)
       return estadoPrescripcionesRepository.Prescripciones(prescripciones).then(data => {
            
            res.send(data)
            
        }).catch(error => {
            res.send(error)
        })
           
}
    }
