//include the model (aka DB connection)
var db = require("./dbConnection");

const estadoPrescripciones = "CALL CambiarEstadoPrescripciones";

//create class
var prescipciones = {
    //function to query all items
    Prescripciones: (prescripciones) => {
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
  module.exports = prescipciones;