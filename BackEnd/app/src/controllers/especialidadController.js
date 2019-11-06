const especialidades = require("../models/especialidadesModel");

module.exports = {
  listEspecialidades: function(req, res) {
    especialidades
      .getEspecialidadesList()
      .then(data => {
        res.send(data);
      })
      .catch(error => {
        res.send(error);
      });
  }
};
