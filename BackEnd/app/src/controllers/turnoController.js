const arrayTurno = require('../models/turnoModel');

module.exports = {
    listTurno: function (req,res) {
        res.send(arrayTurno)
    }
}