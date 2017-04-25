var express = require('express');
var GitHubApi = require('node-github');
var bodyparser = require('body-parser');
var session = require('express-session');
var middleware = require('./middleware.js')
var app = express();
var PORT = process.env.PORT || 3050;

app.use("/partials", express.static("public/partials"));
app.use("/css", express.static("public/css"));
app.use("/img", express.static("public/img"));
app.use("/js", express.static("public/js"));

app.use(bodyparser.urlencoded({extended:false}));

app.get("/", function(req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

// Listening for request
app.listen(PORT, function() {
  console.log("Listening on port %s", PORT);
});
