//include the model (aka DB connection)
var db = require("./dbConnection");
const historialClinicoTurno = "CALL HistorialClinicoTurno";
const historialClinicoInternacion = "CALL HistorialClinicoInternacion";

//create class
var historialClinicoRepository = {
  //function to query all items
  obtenerHistoriaClinica: (dni) => {
      let hc = []
     
      
    return new Promise((resolve, reject) => {
      db.query(`${historialClinicoTurno}('${dni}');`, (err, res) => {
        if (err) {
          reject(err);
        } else {
          
            hc.push(res)
          resolve(hc);
        }
      });
    
      db.query(`${historialClinicoInternacion}('${dni}');`, (err, res) => {
        if (err) {
          reject(err);
        } else {
            hc.push(res)
          resolve(hc);
        }
      });
    });
  }
};
module.exports = historialClinicoRepository;
