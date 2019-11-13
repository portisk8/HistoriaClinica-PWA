//include the model (aka DB connection)
var db = require("./dbConnection");
const historialDroga = "CALL HistorialDroga";
//create class
var historialDrogaRepository = {
  //function to query all items
  HistorialDroga: (dni) => {
    return new Promise((resolve, reject) => {
      db.query(`${historialDroga}('${dni}');`, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }
};
module.exports = historialDrogaRepository;
