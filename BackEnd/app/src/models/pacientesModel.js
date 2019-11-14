
module.exports = {
    pacienteModel: function(dni, nombre, apellido) {
      return {
        dni: dni,
        nombre: nombre,
        apellido: apellido
      }
    },
    prescripcionesEstadoModel: function(dni, droga, drogueria) {
      return {
        dni: dni,
        droga: droga,
        drogueria: drogueria
      }
    }
  };
  
  
   