//include the model (aka DB connection)
var db = require("./dbConnection");


//create class
var Users = {
    //function to query all items
    RegisterUser: (username, password) => {
      return new Promise((resolve, reject) => {
          //QUERYS
        const insertarUsuario = "INSERT INTO Usuarios(username, pass) VALUES(?, ?)";
        db.query(insertarUsuario, [username, password], (err, res) => {
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