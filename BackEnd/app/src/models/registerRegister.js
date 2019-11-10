//include the model (aka DB connection)
var db = require("./dbConnection");


//create class
var Users = {
    //function to query all items
    RegisterUser: (dni, username, password) => {
      return new Promise((resolve, reject) => {
        const insertarUsuario = "INSERT INTO Usuarios(dni, username, pass) VALUES(?, ?, ?)";
        db.query(insertarUsuario, [parseInt(dni), username, password], (err, res) => {
          if (err) {
            reject(err);
          } else {
            resolve(res);
          }
        });
      });
    }
  };
  module.exports = Users;