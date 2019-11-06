//include the model (aka DB connection)
var db = require("./dbConnection");

//QUERYS
const queryReservarTurno = "CALL Turno_Guardar";

//create class
var Turnos = {
  //function to query all items
  turnoGuardar: turno => {
    return new Promise((resolve, reject) => {
      var query = db.query(
        `${queryReservarTurno}('${turno.fecha}','${turno.motivo}',${turno.paciente},${turno.medico})`,
        (err, res) => {
          if (err) {
            reject(err);
          } else {
            resolve(res);
          }
        }
      );
    });
  }
};
module.exports = Turnos;
