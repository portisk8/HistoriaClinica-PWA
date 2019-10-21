var express = require("express");
var app = express();
var cors = require("cors");
app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

// import routes
const especialidadesRouter = require("./app/src/routes/especialidadesRouter");

app.use("/api", especialidadesRouter);

//config ports
var port = Number(process.env.PORT || 3001);

app.listen(port, function() {
  console.log("Running in port", port);
});
