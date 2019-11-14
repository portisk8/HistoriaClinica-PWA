var db = require("./dbConnection");
//QUERYS
const queryTurnoGuardar = "CALL Turno_Guardar";
const historialListBuscar = "SELECT * FROM Turnos";
const queryTurnoUltimoDisponibleObtener = "CALL TurnoUltimoDisponible_Obtener";

//create class
module.exports = {
  //function to query all items
  guardar: turno => {
    return new Promise((resolve, reject) => {
      db.query(
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
  },
  ultimoDisponibleObtener: turno => {
    return new Promise((resolve, reject) => {
      db.query(
        `${queryTurnoUltimoDisponibleObtener}('${turno.fecha}','${turno.medico}');`,
        (err, res) => {
          if (err) {
            reject(err);
          } else {
            var result = { turnoDisponible: res[0][0]["@ultimaHoraTurno"] };
            resolve(result);
          }
        }
      );
    });
  }
};
