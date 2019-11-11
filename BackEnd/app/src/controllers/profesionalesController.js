const profesionalesModel = require('../models/profesionalesModel');
const profesionalesRepository = require('../repositories/profesionalesRepository');

module.exports = {
    obtenerPorEspecialidad: function (req, res) {
        
        profesionalesRepository.obtenerPorEspecialidad(req.body.descripcion).then(profesional => {
            res.send(profesional[0].nombre)
            let profesionales = profesionalesModel.ProfesionalesModel(req.body.descripcion);
            return profesional;
        }
           )
}
    }
