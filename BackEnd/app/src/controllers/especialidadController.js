const arrayModel = require("../models/especialidadesModel");

module.exports = {
  listEspecialidades: function(req, res) {
    res.status(200).send(arrayModel);
  }
};
