var mysql = require("mysql");
var config = require("../../config/environment");

var connection = mysql.createPool({
  host: config.DB_HOST,
  port: config.DB_PORT,
  user: config.DB_USERNAME,
  password: config.DB_PASSWORD,
  database: config.DB_DATABASE
});

module.exports = connection;
