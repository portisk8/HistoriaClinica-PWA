//include the model (aka DB connection)
var db = require("./dbConnection");

//QUERYS

const historialTurnosBuscar = "SELECT * FROM Turnos";
//create class
var HistorialTurnos = {
  //function to query all items
  getTurnosList: () => {
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
module.exports = HistorialTurnos;