var express = require('express');
var GitHubApi = require('node-github');
var bodyparser = require('body-parser');
var session = require('express-session');
var middleware = require('./middleware.js')
var app = express();
var PORT = process.env.PORT || 3000;

app.use("/js", express.static("public/js"));
app.use("/css", express.static("public/css"));
app.use("/img", express.static("public/img"));
app.use(session({
 secret: 'crazy secret boom!!',
 cookie: {
     maxAge: 60000
   },
 saveUninitialized:true,
 resave: false
 }
));

app.use(bodyparser.urlencoded({extended:false}));

app.use(session({
  secret: "fjkdlasfjda",
  cookie: {maxAge: 60000},
  saveUninitialized: true,
  resave: false
}));

app.get("/", function(req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

app.get("/login", function(req, res) {
  res.sendFile(process.cwd() + "/views/login.html");
});

app.get("/resume", middleware.isAuthenticated, function(req, res) {
  res.sendFile(process.cwd() + "/views/resume.html");
});

app.get("/loginhelp", function(req, res) {
  res.sendFile(process.cwd() + "/views/loginhelp.html");
});

app.get("/shootout", function(req, res) {
  res.sendFile(process.cwd() + "/views/rock-paper-scissors.html");
});

app.get('/repos/:user', function(req, res) {
  var github = new GitHubApi({
    version: "3.0.0"
  });
  var user = req.params.user;

  github.user.getFrom({
    user: user
  }, function(err, result) {
    res.send(JSON.stringify(result));
  });
});






app.post('/login', function(req,res) {
  console.log(req.body);
  if(req.body.usrname === "guest" && req.body.password === "guest") {
    req.session.isAuthenticated = true;
    console.log("if fired");
    res.redirect("/resume");
  }
  else {
    req.session.isAuthenticated = false;
    res.redirect("/loginhelp");
  }
});

// Listening for request
app.listen(PORT, function() {
  console.log("Listening on port %s", PORT);
});