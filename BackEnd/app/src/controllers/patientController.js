const patientRepository = require("../Repositories/patientRepository");
const patientModel = require("../models/patientModel");

module.exports = {
  registerPatient: function(req, res) {
  
    let patient = patientModel.PatientModel(req.body.dni, req.body.nombre, req.body.apellido);
    return patientRepository
    .CreatePatient(patient)
    .then(data => {
      res.send(data);
    })
    .catch(error => {
      res.send(error);
    });; 
  }
};
