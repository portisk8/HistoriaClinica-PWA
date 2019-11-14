const historialDrogaRepository = require("../repositories/historialDrogasRepository");

module.exports = {
  HistorialDrogas: function(req, res) {
    return historialDrogaRepository
      .HistorialDroga(req.params.dni)
      .then(data => {
        res.send(data);
      })
      .catch(error => {
        res.send(error);
      });
  }
};
