//include the model (aka DB connection)
var db = require("./dbConnection");

const requestDrugs = "CALL RequestDrugs";

//create class
var RequestDrug = {
    //function to query all items
    RequestDrugs: (drugs) => {
      return new Promise((resolve, reject) => {
        db.query(`${requestDrugs}('${drugs.nameDrug}', '${drugs.drugstore}', ${parseInt(drugs.count)})`, (err, res) => {
          if (err) {
            reject(err);
          } else {
            resolve(res);
          }
        });
      });
    }
  };
  module.exports = RequestDrug;