const turnos = require("../models/turnosModel");

module.exports = {
  turnoGuardar: function(req, res) {
    var turno = {
      fecha: req.body.fecha,
      motivo: req.body.motivo,
      paciente: req.body.paciente,
      medico: req.body.medico
    };
    turnos
      .turnoGuardar(turno)
      .then(data => {
        res.send(data);
      })
      .catch(error => {
        res.send(error);
      });
  }
};
