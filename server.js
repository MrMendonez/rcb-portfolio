var express = require('express');
var GitHubApi = require('node-github');
var bodyparser = require('body-parser');
var session = require('express-session');
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

app.get("/", function(req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

app.get("/login", function(req, res) {
  res.sendFile(process.cwd() + "/views/login.html");
});

app.get("/resume", function(req, res) {
  res.sendFile(process.cwd() + "/views/resume.html");
});

app.get("/repos", function(req, res) {
  res.sendFile(process.cwd() + "/views/repos.html");
});

app.get("/shootout", function(req, res) {
  res.sendFile(process.cwd() + "/views/rock-paper-scissors.html");
});

app.get("/img", function(req, res) {
  res.sendFile(process.cwd() + "/views/img");
});

app.get('/repos/:user', function(req, res) {
  var github = new GitHubApi({
    version: "3.0.0"
  });
  var user = req.params.user;

  github.user.getFrom({
    user: user
  }, function(err, result) {
    console.log(result);
    res.send(JSON.stringify(result));
  });
});





// Log in to view resume
function middleware(req,res,next){
 var sess = req.session;

 if(sess.authenticated === undefined || sess.authenticated === false){
   res.redirect("/resume");
 }
 next();

}

app.post('/resume', function(req,res){
   console.log(req.body);
   if(req.body.usrname === "guest" && req.body.password === "guest"){
     req.session.authenticated = true;
     res.redirect("/views/resume.html");
   }
   else {
     req.session.authenticated = false;
     res.redirect("/views/loginhelp.html");
   }

});

app.get("/help", function(req, res) {
  res.sendFile(process.cwd() + "/views/loginhelp.html");
});

// Listening for request
app.listen(PORT, function() {
  console.log("Listening on port %s", PORT);
});