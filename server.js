var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

app.use("/js", express.static("public/js"));
app.use("/css", express.static("public/css"));

app.get("/", function(req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

app.get("/resume", function(req, res) {
  res.sendFile(process.cwd() + "/views/resume.html");
});

app.get("/repos", function(req, res) {
  res.sendFile(process.cwd() + "/views/repos.html");
});

app.get("/shootout", function(req, res) {
  res.sendFile(process.cwd() + "/views/shoutout.html");
});

app.get("/img", function(req, res) {
  res.sendFile(process.cwd() + "/views/img");
});

app.get('/movies/:movieName', function(req, res) {
  omdb.search(req.params.movieName, function(err, movies) {
    console.log(movies);
    var firstMovie = movies[0];

    res.send(JSON.stringify(firstMovie));
  });
});

app.listen(PORT, function() {
  console.log("Listening on port %s", PORT);
});