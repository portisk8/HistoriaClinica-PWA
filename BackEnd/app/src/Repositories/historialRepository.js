//include the model (aka DB connection)
var db = require("./dbConnection");

const historialClinicoSP = "CALL Historial_Clinico_Obtener";
const drogaSP = "CALL DrogasHistorial_Obtener";
const historialTurnosBuscar = "SELECT * FROM Turnos";
//create class

module.exports ={
    historialDrogaObtener: (dni) => {
        return new Promise((resolve, reject) => {
          db.query(`${drogaSP}('${dni}');`, (err, res) => {
            if (err) {
              reject(err);
            } else {
              resolve(res);
            }
          });
        });
      },
      historialClinicoObtener: (dni) => {
        return new Promise((resolve, reject) => {
          db.query(`${historialClinicoSP}('${dni}');`, (err, res) => {
            if (err) {
              reject(err);
            } else {
              
                hc.push(res)
              resolve(hc);
            }
          });
    
        });
      },
      historialTurnosObtener: () => {
        return new Promise((resolve, reject) => {
          db.query(historialTurnosBuscar, (err, res) => {
            if (err) {
              reject(err);
            } else {
              resolve(res);
            }
          });
        });
      } 
};


