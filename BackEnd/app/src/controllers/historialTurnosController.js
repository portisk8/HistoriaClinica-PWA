const historialTurnosRepository = require('../repositories/historialTurnosRepository');

module.exports = {
  listHistorialTurnos: function(req, res) {
    //let dni = req.params.dni;
    return historialTurnosRepository.getHistorialTurnosList(req.params.dni)
    .then(data => {
      res.send(data);
    })
    .catch(error => {
      res.send(error);
    });
  }
};
