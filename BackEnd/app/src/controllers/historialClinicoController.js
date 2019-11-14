const historiasClinicasRepository = require("../repositories/historiasClinicasRepository");
/*const historiasClinicasModel = require("../models/historiasClinicasModel");*/

module.exports = {
  obtenerHistoriaClinica: function(req, res) {
    return historiasClinicasRepository
      .obtenerHistoriaClinica(req.params.dni)
      .then(historiaClinica => {
        res.send(historiaClinica[0]);
      })
      .catch(error => {
        res.send(error);
      });
  }
};
