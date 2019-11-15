
module.exports = {
    historialDrogas: function(droga, profesional, fecha) {
        return {
          droga: droga,
          profesional: profesional,
          fecha: fecha  
        }
      }
  };
  
  module.exports = {
    historialTurnos: function(especialidad,apellido,nombre,anioAtencion,mesAtencion,diaAtencion,horaAtencion,estado){
      return{

        especialidad: especialidad,
        apellido: apellido,
        nombre: nombre,
        anioAtencion: anioAtencion,
        mesAtencion: mesAtencion,
        diaAtencion: diaAtencion,
        horaAtencion: horaAtencion,
        estado: estado

      }

    }

  }
  
   