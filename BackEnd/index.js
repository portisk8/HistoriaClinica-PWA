var express = require("express");
var app = express();
var cors = require("cors");
app.use(cors());


// import routes
const especialidadesRouter = require('./app/src/routes/especialidadesRouter');
const infoProfesionalRouter = require('./app/src/routes/profesionalesRouter');
const loginRouter = require('./app/src/routes/loginRouter');

app.use('/api',especialidadesRouter)
app.use('/api',infoProfesionalRouter)
app.use('/api',loginRouter)

//config ports
var port = Number(process.env.PORT || 3001);

app.listen(port, function() {
  console.log("Running in port", port);
});
