
const DrogasNoEntregadasSP = "CALL DrogasNoEntregadas_Obtener";
const DrogasStock_Descontar = "CALL DrogasStock_Descontar";

  module.exports = {
    noEntregadasObtener: (dni) => {
      return new Promise((resolve, reject) => {
        db.query(`${DrogasNoEntregadasSP}(${dni})`, (err, res) => {
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

