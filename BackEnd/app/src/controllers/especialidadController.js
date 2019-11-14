const especialidadRepository = require("../repositories/especialidadRepository");

module.exports = {
  listEspecialidades: function(req, res) {
    especialidadRepository
      .getEspecialidadesList()
      .then(data => {
        res.send(data);
      })
      .catch(error => {
        res.send(error);
      });
  }
};
