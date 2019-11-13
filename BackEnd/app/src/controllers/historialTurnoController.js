const historialTurnosRepository = require('../repositories/historialTurnosRepository');

module.exports = {
  listHistorialTurnos: function(req, res) {
    let dni = req.params.dni;
    return historialTurnosRepository
    .getHistorialTurnosList(dni)
    .then(data => {
      res.send(data);
    })
    .catch(error => {
      res.send(error);
    });
  }
};
