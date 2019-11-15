//include the model (aka DB connection)
var db = require("./dbConnection");

const createUser = "CALL Create_User";
const login = "CALL Login";

//create class
var Users = {
  //function to query all items
  crear: user => {
    return new Promise((resolve, reject) => {
      db.query(
        `${createUser}(${user.dni},'${user.username}','${user.password}')`,
        (err, res) => {
          if (err) {
            reject(err);
          } else {
            resolve(res);
          }
        }
      );
    });
  },
  login: dni => {
    return new Promise((resolve, reject) => {
      db.query(`${login}(${dni})`, (err, res) => {
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
