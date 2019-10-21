const arrayInfoProfesional = require('../models/infoProfesionalModel');

module.exports = {
    listInfoProfesional: function (req,res) {
        res.send(arrayInfoProfesional)
    }
}