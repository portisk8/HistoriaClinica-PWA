const turnoRepository = require("../repositories/turnoRepository");

module.exports = {
  turnoGuardar: function(req, res) {
    var turno = {
      fecha: req.body.fecha.split("T")[0],
      hora: req.body.hora,
      motivo: req.body.motivo,
      paciente: req.body.paciente,
      profesional: req.body.profesional
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
      fecha: req.body.fecha.split("T")[0],
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
