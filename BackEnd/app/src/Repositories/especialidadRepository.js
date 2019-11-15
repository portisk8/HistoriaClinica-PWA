//include the model (aka DB connection)
var db = require("./dbConnection");

//QUERYS
const especialidadesBuscar = "SELECT * FROM Especialidades";

//create class
var Especialidades = {
  //function to query all items
  getEspecialidadesList: () => {
    return new Promise((resolve, reject) => {
      db.query(especialidadesBuscar, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }
};
module.exports = Especialidades;
