const historialRepository = require('../repositories/historialRepository');
// const historialTurnos = require("../models/historialTurnosModel");

module.exports = {
    historialDrogas: function (req, res) {
       return historialRepository.historialDrogaObtener(req.params.dni).then(data => {         
            res.send(data)          
        }).catch(error => {
            res.send(error)
        })           
    },
    historialTurnos: function(req, res) {
        return historialRepository
          .historialTurnosObtener()
          .then(data => {
            res.send(data);
          })
          .catch(error => {
            res.send(error);
          });
      },
      obtenerHistoriaClinica: function(req, res) {
        return historialRepository.historialClinicoObtener(req.params.dni).then(historiaClinica =>{
            res.send(historiaClinica[0])
        }).catch(error =>{
            res.send(error)
        })
        
    }

}



module.exports = {
 
};
