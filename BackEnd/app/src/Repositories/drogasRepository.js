
const DrogasNoEntregadasSP = "CALL DrogasNoEntregadas_Obtener";

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
    }
  };

