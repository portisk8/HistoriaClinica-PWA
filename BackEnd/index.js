var express = require('express');
var app = express();


var port = Number(process.env.PORT || 3001);

app.listen(port, function(){
    console.log("Running in port", port);
})