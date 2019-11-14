//include the model (aka DB connection)
var db = require("./dbConnection");
const profesionales = "CALL Profesionales_obtener";
//create class
var profesionalesRepository = {
  //function to query all items
  obtenerPorEspecialidad: descripcion => {
    return new Promise((resolve, reject) => {
      db.query(`${profesionales}('${descripcion}');`, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res[0]);
        }
      });
    });
  }
};
module.exports = profesionalesRepository;
