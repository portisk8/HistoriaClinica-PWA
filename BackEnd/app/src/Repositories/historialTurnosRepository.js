var db = require("./dbConnection");

const historialTurnos = "call HistorialTurnos";

var HistorialTurnos = {
    getHistorialTurnosList: (dni) => {
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