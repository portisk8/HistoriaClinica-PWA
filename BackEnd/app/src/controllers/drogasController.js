//const drugModel = require('../models/drugModel');
const drogasRepository = require("../repositories/drogasRepository");
const drogasModel = require("../models/drogaModel");

module.exports = {
  drograsNoEntregadas: function(req, res) {
    let dni = req.params.dni;
    return drogasRepository
      .noEntregadasObtener(dni)
      .then(data => {
        res.send(data);
      })
      .catch(error => {
        res.send(error);
      });
  },
  stockDrogaDescontar: function(req, res) {
    let droga = drogasModel.stockDescontarModel(req.body.droga, req.body.drogueria, req.body.cantidad)
    return requestDrugRepository
      .RequestDrugs(droga)
      .then(data => {
        res.send(data);
      })
      .catch(error => {
        res.send(error);
      });
  }
};
