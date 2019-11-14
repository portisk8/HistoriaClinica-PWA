//include the model (aka DB connection)
var db = require("./dbConnection");

const estadoPrescripciones = "CALL PrescripcionesEstados_Cambiar";
const PacientesRegistrar = "CALL Pacientes_Registrar";

 
//create class
module.exports = {
    //function to query all items
    Registrar: (paciente) => {
      return new Promise((resolve, reject) => {
        db.query(`${PacientesRegistrar}(${paciente.dni},'${paciente.nombre}','${paciente.apellido}')`, (err, res) => {
          if (err) {
            reject(err);
          } else {
            resolve(res);
          }
        });
      });
    },
    prescripcionesEstadoCambiar: (prescripciones) => {
      return new Promise((resolve, reject) => {
        db.query(`${estadoPrescripciones}(${prescripciones.dni},'${prescripciones.droga}', '${prescripciones.drogueria}')`, (err, res) => {
          if (err) {
            reject(err);
          } else {
            resolve(res);
          }
        });
      });
    }
  };
  