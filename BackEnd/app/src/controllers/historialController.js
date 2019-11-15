const historialRepository = require("../repositories/historialRepository");
const HistorialModel = require("../models/historialesModel");

module.exports = {
  historialDrogas: function(req, res) {
    let historialModel = []
    historialRepository
      .historialDrogaObtener(req.params.dni)
      .then(data => {
          data[0].forEach(element => {
              historialModel.push(HistorialModel.historialDrogas(element.droga, element.nombre, element.duracion));
          });
        res.send(historialModel);
      })
      .catch(error => {
        res.send(error);
      });
  },
  historialTurnosObtener: function(req, res) {
    //let dni = req.params.dni;
    let historialModel = []
    historialRepository
      .historialTurnosObtener(req.params.dni)
      .then(data => {
        data[0].forEach(element=> {
          historialModel.push(HistorialModel.historialTurnos(element.especialidad,element.apellido,element.nombre,
          element.anioAtencion,element.mesAtencion,element.diaAtencion,element.horaAtencion,element.estado))          
        });
        res.send(historialModel);
      })
      .catch(error => {
        res.send(error);
      });
  },
  obtenerHistoriaClinica: function(req, res) {
    historialRepository
      .historialClinicoObtener(req.params.dni)
      .then(historiaClinica => {
        res.send(historiaClinica[0]);
      })
      .catch(error => {
        res.send(error);
      });
  }
};
