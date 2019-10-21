var express = require('express');
var app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

// import routes
const especialidadesRouter = require('./app/src/routes/especialidadesRouter');
const infoProfesionalRouter = require('./app/src/routes/profesionalesRouter');

app.use('/api',especialidadesRouter)
app.use('/api',infoProfesionalRouter)

//config ports
var port = Number(process.env.PORT || 3001);

app.listen(port, function(){
    console.log("Running in port", port);
})