const historialTurnos = require("../models/historialTurnosModel");

module.exports = {
  listHistorialTurnos: function(req, res) {
    historialTurnos
      .getHistorialTurnosList()
      .then(data => {
        res.send(data);
      })
      .catch(error => {
        res.send(error);
      });
  }
};
