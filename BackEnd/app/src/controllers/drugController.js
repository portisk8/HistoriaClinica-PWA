//const drugModel = require('../models/drugModel');
const drugRepository = require("../repositories/drugRepository");

module.exports = {
  drug: function(req, res) {
    let dni = req.params.dni;
    return drugRepository
      .GetDrogas(dni)
      .then(data => {
        res.send(data);
      })
      .catch(error => {
        res.send(error);
      });
  }
};
