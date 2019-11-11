//include the model (aka DB connection)
var db = require("./dbConnection");
const profesionales = "CALL Profesionales";
//create class
var ProfesionalesRepository = {
  //function to query all items
  profesionales: (descripcion, nroMatricula) => {
    return new Promise((resolve, reject) => {
      db.query(`${profesionales}(${descripcion})(${nroMatricula}) `, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }
};
module.exports = profesionalesRepository;
