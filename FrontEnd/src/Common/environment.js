const dotenv = require("dotenv");
dotenv.config();

console.log("ProcessEnv", process.env);

module.exports = {
  API_URL: process.env.REACT_APP_API_URL
};
