//QUERYS
const queryTurnoGuardar = "CALL Turno_Guardar";
const historialListBuscar = "SELECT * FROM Turnos";

//create class
var Turnos = {
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
  }
  //Comentado hasta tener todo bien
  //   historialList: () => {
  //     return new Promise((resolve, reject) => {
  //       db.query(historialListBuscar, (err, res) => {
  //         if (err) {
  //           reject(err);
  //         } else {
  //           resolve(res);
  //         }
  //       });
  //     });
  //   }
};
