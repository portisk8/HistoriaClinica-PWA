//include the model (aka DB connection)
var db = require("./dbConnection");
const historialClinicoTurno = "CALL historialClinicoTurno";
const historialClinicoInternacion = "CALL historialClinicoInternacion";

//create class
var profesionalesRepository = {
  //function to query all items
  obtenerHistoriaClinica: (dni) => {
      let hc = []
    return new Promise((resolve, reject) => {
      db.query(`${historiaClinica}('${dni}');`, (err, res) => {
        if (err) {
          reject(err);
        } else {
            hc.push(res)
          resolve(hc);
        }
      });
    
      db.query(`${historiaClinica}('${dni}');`, (err, res) => {
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
module.exports = profesionalesRepository;
