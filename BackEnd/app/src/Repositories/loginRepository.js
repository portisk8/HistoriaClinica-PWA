//include the model (aka DB connection)
var db = require("./dbConnection");

//create class
var loginRepository = {
  //function to query all items
  login: (dni) => {
    const findUser = "SELECT * FROM Usuarios where dni="+dni+";";
    return new Promise((resolve, reject) => {
      db.query(findUser, (err, res) => {
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