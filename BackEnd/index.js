var express = require("express");
var app = express();
var cors = require("cors");
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// import routes
const especialidadesRouter = require("./app/src/routes/especialidadesRouter");
const infoProfesionalRouter = require("./app/src/routes/profesionalesRouter");
const loginRouter = require("./app/src/routes/loginRouter");
const turnosRouter = require("./app/src/routes/turnosRouter");

app.use("/api", especialidadesRouter);
app.use("/api", infoProfesionalRouter);
app.use("/api", loginRouter);
app.use("/api", turnosRouter);

//config ports
var port = Number(process.env.PORT || 3001);

app.listen(port, function() {
  console.log("Running in port", port);
});
