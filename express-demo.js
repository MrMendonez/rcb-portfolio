var express = require('express');
var app = express();
var PORT = 3000;

app.get('/login', function(req, res) {
  res.sendFile(process.cwd() + "/views/login.html");
});

app.get("/help", fuction(req, res))

app.listen(PORT, function() {
  console.log("App listening on port %s", PORT);
});