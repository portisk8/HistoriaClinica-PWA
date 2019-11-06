//include the model (aka DB connection)
var db = require("./dbConnection");

//QUERYS
const queryTurnoGuardar = "CALL Turno_Guardar";

//create class
var Turnos = {
  //function to query all items
  turnoGuardar: turno => {
    return new Promise((resolve, reject) => {
      var query = db.query(
        `${queryTurnoGuardar}('${turno.fecha}','${turno.motivo}',${turno.paciente},${turno.medico})`,
        (err, res) => {
          if (err) {
            reject(err);
          } else {
            var result = { exito: res[0][0]["@exito"] };
            resolve(result);
          }
        }
      );
    });
  }
};
module.exports = Turnos;
