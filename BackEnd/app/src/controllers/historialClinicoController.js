const historiasClinicasRepository = require("../Repositories/historiasClinicasRepository");
/*const historiasClinicasModel = require("../models/historiasClinicasModel");*/

module.exports = {
  obtenerHistoriaClinica: function(req, res) {
  
    return historiasClinicasRepository.obtenerHistoriaClinica(req.params.dni).then(historiaClinica =>{
        res.send(historiaClinica)
    }).catch(error =>{
        res.send(error)
    })
    
}
  }
