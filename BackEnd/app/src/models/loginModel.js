//include the model (aka DB connection)
var db = require("./dbConnection");



//create class
var Login = {
  //function to query all items
  getUsers: (dni) => {
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
module.exports = Login;
/*
module.exports = Users = {
    items: [{username: "name", password: "123456"}]
};*/