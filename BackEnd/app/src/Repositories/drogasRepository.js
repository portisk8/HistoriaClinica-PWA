var db = require("./dbConnection");
const DrogasNoEntregadas_Obtener = "CALL DrogasNoEntregadas_Obtener";
const DrogasStock_Descontar = "CALL DrogasStock_Descontar";

  module.exports = {
    noEntregadasObtener: (dni) => {
      return new Promise((resolve, reject) => {
        db.query(`${DrogasNoEntregadas_Obtener}(${dni})`, (err, res) => {
          if (err) {
            reject(err);
          } else {
            resolve(res);
          }
        });
      });
    },

    stockDescontar: (droga) => {
      return new Promise((resolve, reject) => {
        db.query(`${DrogasStock_Descontar}('${droga.droga}', '${droga.drogueria}', ${parseInt(droga.cantidad)})`, (err, res) => {
          if (err) {
            reject(err);
          } else {
            resolve(res);
          }
        });
      });
    }
  };

