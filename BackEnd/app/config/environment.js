var config = null;
try {
  config = require("./env.json")[process.env.NODE_ENV || "development"];
} catch (error) {
  config = process.env.NODE_ENV;
}

module.exports = {
  DB_HOST: config.DB_HOST,
  DB_USERNAME: config.DB_USERNAME,
  DB_PASSWORD: config.DB_PASSWORD,
  DB_PORT: config.DB_PORT,
  DB_DATABASE: config.DB_DATABASE
};
