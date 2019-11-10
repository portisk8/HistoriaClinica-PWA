//include the model (aka DB connection)
var db = require("./dbConnection");
const login = "CALL Login";
//create class
var loginRepository = {
  //function to query all items
  login: (dni) => {
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
module.exports = loginRepository;
/*
module.exports = Users = {
    items: [{username: "name", password: "123456"}]
};*/