module.exports = {
    stockDescontarModel: function(droga, drogueria, cantidad) {
      return {
        droga: droga,
        drogueria: drogueria,
        cantidad: cantidad
      }
    },

    drogaNoEntregadaModel: function(droga,drogueria, cantidad) {
      return {
        droga: droga,
        drogueria: drogueria,
        cantidad: cantidad
      }
    }

  };