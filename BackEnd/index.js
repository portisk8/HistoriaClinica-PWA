var express = require("express");
var app = express();
var cors = require("cors");
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// import routes
const especialidadesRouter = require("./app/src/routes/especialidadesRouter");
const profesionalRouter = require("./app/src/routes/profesionalesRouter");
const loginRouter = require("./app/src/routes/loginRouter");
const turnosRouter = require("./app/src/routes/turnosRouter");
const userRouter = require("./app/src/routes/userRouter");
const drugRouter = require("./app/src/routes/drugRouter");
const patientRouter = require("./app/src/routes/patientRouter");
const historialClinicoRouter = require("./app/src/routes/historiasClinicasRouter");

const drugsRouter = require("./app/src/routes/requestDrugsRoutes");
const estadoPrescripcionesRouter = require("./app/src/routes/estadoPrescripcionesRouter");
const historialDrogaRouter = require("./app/src/routes/historialDrogaRouter");
const historialTurnosRouter = require("./app/src/routes/historialTurnosRouter");

app.use("/api", especialidadesRouter);
app.use("/api", profesionalRouter);
app.use("/api", loginRouter);
app.use("/api", turnosRouter);
app.use("/api", userRouter);
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
