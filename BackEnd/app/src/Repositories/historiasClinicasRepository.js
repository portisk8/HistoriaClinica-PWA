//include the model (aka DB connection)
var db = require("./dbConnection");
const profesionales = "CALL historiasClinicas()";
//create class
var historiaClinica = {
  //function to query all items
  obtenerHistoriaClinica: () => {
    return new Promise((resolve, reject) => {
      db.query(`${historiaClinica};`, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }
};
module.exports = historiaClinica;

