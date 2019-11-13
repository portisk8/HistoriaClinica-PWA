const requestDrugRepository = require("../repositories/requestDrugsRepository");
const requestDrugModel = require("../models/requestDrugModel");

module.exports = {
  requestDrugs: function(req, res) {
    let drugs = requestDrugModel.RequestDrugModel(req.body.droga, req.body.drogueria, req.body.cantidad);
    return requestDrugRepository
    .RequestDrugs(drugs)
    .then(data => {
      res.send(data);
    })
    .catch(error => {
      res.send(error);
    });; 
  }
};
