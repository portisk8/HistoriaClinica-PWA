const pacienteRepository = require("../repositories/pacientesRepository");
const pacienteModel = require("../models/pacientesModel");

module.exports = {
  registrar: function(req, res) { 
    let paciente = pacienteModel.pacienteModel(req.body.dni, req.body.nombre, req.body.apellido);
    return pacienteRepository
    .Registrar(paciente)
    .then(data => {
      res.send(data);
    })
    .catch(error => {
      res.send(error);
    });; 
  },
  prescripcionesEstadoCambiar: function (req, res) {
    let prescripciones = pacienteModel.prescripcionesEstadoModel(req.body.dni, req.body.droga, req.body.drogueria)
   return pacienteRepository.prescripcionesEstadoCambiar(prescripciones).then(data => {
        
        res.send(data)
        
    }).catch(error => {
        res.send(error)
    })
       
}
};
