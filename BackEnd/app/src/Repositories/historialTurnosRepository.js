var db = require("./dbConnection");

const historialTurnos = "CALL HistorialTurnos";

var HistorialTurnos = {
    GetDrogas: (dni) => {
        return new Promise((resolve, reject) => {
            db.query(`${historialTurnos}(${dni})`, (err, res) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(res);
                }
            });
        });
    }
};
  module.exports = HistorialTurnos;