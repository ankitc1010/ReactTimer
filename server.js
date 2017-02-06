var express = require('express');
// var expressStaticGzip = require("express-static-gzip");
// Create our app
var app = express();
const PORT = process.env.PORT || 3000;


// app.use("/", expressStaticGzip("public"));

app.use(express.static('public'));

app.listen(PORT, process.env.IP, function () {
  console.log('Express server is up on port ' + PORT);
});
