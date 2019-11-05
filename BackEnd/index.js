var express = require("express");
var app = express();
var cors = require("cors");
app.use(cors());

// import routes
const especialidadesRouter = require('./app/src/routes/especialidadesRouter');
const infoProfesionalRouter = require('./app/src/routes/profesionalesRouter');
const turnoRouter = require('./app/src/routes/turnoRouter');

app.use('/api',especialidadesRouter)
app.use('/api',infoProfesionalRouter)
app.use('/api',turnoRouter)

//config ports
var port = Number(process.env.PORT || 3001);

app.listen(port, function() {
  console.log("Running in port", port);
});
