//include the model (aka DB connection)
var db = require("./dbConnection");


//create class
var Users = {
    //function to query all items
    CreateUser: (user) => {
      return new Promise((resolve, reject) => {
        const insertarUsuario = "INSERT INTO Usuarios(dni, username, pass) VALUES(?, ?, ?)";
        db.query(insertarUsuario, [parseInt(user.dni), user.username, user.password], (err, res) => {
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