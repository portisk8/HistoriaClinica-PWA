//include the model (aka DB connection)
var db = require("./dbConnection");

const createPatient = "CALL Create_Patient";

//create class
var Patient = {
    //function to query all items
    CreatePatient: (patient) => {
      return new Promise((resolve, reject) => {
        db.query(`${createPatient}(${patient.dni},'${patient.nombre}','${patient.apellido}')`, (err, res) => {
          if (err) {
            reject(err);
          } else {
            resolve(res);
          }
        });
      });
    }
  };
  module.exports = Patient;