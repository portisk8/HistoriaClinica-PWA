//include the model (aka DB connection)
var db = require("./dbConnection");

const createUser = "CALL Create_User";

//create class
var Users = {
    //function to query all items
    CreateUser: (user) => {
      return new Promise((resolve, reject) => {
        db.query(`${createUser}(${user.dni},'${user.username}','${user.password}')`, (err, res) => {
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