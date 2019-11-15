var express = require("express");
var app = express();
var cors = require("cors");
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// import routes
const especialidadesRouter = require("./app/src/routes/especialidadesRouter");
const profesionalRouter = require("./app/src/routes/profesionalRouter");
const turnoRouter = require("./app/src/routes/turnoRouter");
const usuarioRouter = require("./app/src/routes/usuarioRouter");
const drogaRouter = require("./app/src/routes/drogasRouter");
const pacienteRouter = require("./app/src/routes/pacienteRouter");
const historialRouter = require("./app/src/routes/historialRouter");

app.use("/api", especialidadesRouter);
app.use("/api", profesionalRouter);
app.use("/api", turnoRouter);
app.use("/api", usuarioRouter);

app.use("/api", drogaRouter);
app.use("/api", pacienteRouter);
app.use("/api", historialRouter);

//config ports
var port = Number(process.env.PORT || 3001);

app.listen(port, function() {
  console.log("Running in port", port);
});
