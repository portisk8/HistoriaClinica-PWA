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
const drugRouter = require("./app/src/routes/drugRouter");
const patientRouter = require("./app/src/routes/patientRouter");
const historialClinicoRouter = require("./app/src/routes/historiasClinicasRouter");

const drugsRouter = require("./app/src/routes/requestDrugsRoutes");
const estadoPrescripcionesRouter = require("./app/src/routes/estadoPrescripcionesRouter");
const historialDrogaRouter = require("./app/src/routes/historialDrogaRouter");
const historialTurnosRouter = require("./app/src/routes/historialTurnosRouter");

app.use("/api", especialidadesRouter);
app.use("/api", profesionalRouter);
app.use("/api", turnoRouter);
app.use("/api", usuarioRouter);
app.use("/api", drugRouter);
app.use("/api", patientRouter);
app.use("/api", historialClinicoRouter);

app.use("/api", drugsRouter);
app.use("/api", estadoPrescripcionesRouter);
app.use("/api", historialDrogaRouter);
app.use("/api", historialTurnosRouter);

//config ports
var port = Number(process.env.PORT || 3001);

app.listen(port, function() {
  console.log("Running in port", port);
});
