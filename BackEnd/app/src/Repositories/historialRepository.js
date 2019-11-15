//include the model (aka DB connection)
var db = require("./dbConnection");

const historialClinicoSP = "CALL Historial_Clinico_Obtener";
const drogaSP = "CALL DrogasHistorial_Obtener";
const historialTurnos = "call Turnos_Historial";

//create class

module.exports ={
    historialDrogaObtener: (dni) => {
        return new Promise((resolve, reject) => {
          db.query(`${drogaSP}(${parseInt(dni)});`, (err, res) => {
            if (err) {
              reject(err);
            } else {
              resolve(res);
            }
          });
        });
      },
    /*  historialClinicoObtener: (dni) => {
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
      },*/
      historialTurnosObtener: (dni) => {
        return new Promise((resolve, reject) => {
            db.query(`${historialTurnos}(${dni})`, (err, res) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(res);
                }
            });
        });
    }
};


