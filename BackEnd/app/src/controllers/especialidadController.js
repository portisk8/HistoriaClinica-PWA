const arrayModel = require('../models/especialidadesModel');

module.exports = {
    listEspecialidades: function (req,res) {
        res.send(arrayModel)
    }
}