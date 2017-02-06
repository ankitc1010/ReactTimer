var express = require('express');
var expressStaticGzip = require("express-static-gzip");
// Create our app
var app = express();
const PORT = process.env.PORT;

app.use(function (req, res, next){
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});
app.use("/", expressStaticGzip("public"));

app.use(express.static('public'));

app.listen(PORT, process.env.IP, function () {
  console.log('Express server is up on port ' + PORT);
});
