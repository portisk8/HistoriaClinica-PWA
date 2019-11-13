const profesionalesRepository = require('../repositories/profesionalesRepository');

module.exports = {
    obtenerPorEspecialidad: function (req, res) {
        
       return profesionalesRepository.obtenerPorEspecialidad(req.params.especialidad).then(profesional => {
            
            res.send(profesional)
            
        }).catch(error => {
            res.send(error)
        })
           
}
    }
