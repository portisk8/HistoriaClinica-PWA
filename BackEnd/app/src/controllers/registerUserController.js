const users = require("../models/registerRegister");

module.exports = {
  register: function(req, res) {
    users
      .RegisterUser(req.body.username, req.body.password)
      .then(data => {
        res.send(data);
      })
      .catch(error => {
        res.send(error);
      });
  }
};
