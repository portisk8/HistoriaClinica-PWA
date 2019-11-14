const turnoRepository = require("../repositories/turnoRepository");

module.exports = {
  turnoGuardar: function(req, res) {
    var turno = {
      fecha: req.body.fecha,
      motivo: req.body.motivo,
      paciente: req.body.paciente,
      medico: req.body.medico
    };
    turnoRepository
      .guardar(turno)
      .then(data => {
        res.send(data);
      })
      .catch(error => {
        res.send(error);
      });
  },
  ultimoDisponibleObtener: function(req, res) {
    var turno = {
      fecha: req.body.fecha,
      medico: req.body.medico
    };
    turnoRepository
      .ultimoDisponibleObtener(turno)
      .then(data => {
        res.send(data);
      })
      .catch(error => {
        res.send(error);
      });
  }
};
