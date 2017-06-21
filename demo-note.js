var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var parser = bodyParser.urlencoded({extended: false});

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");
app.listen(3000);

var arr = ["Android", "iOS", "PHP", "React"];
app.get("/", function(req, res) {
  res.render("demo-note");
});

app.post("/getNotes",function(req, res){
  res.send(arr);
});

app.post("/add", parser, function(req, res){
  var newNote = req.body.note;
  arr.push(newNote);
  res.send(arr);
});
app.post("/delete", parser, function(req, res){
  var note = req.body.note;
  arr.splice(note,1);
  res.send(arr);
});
app.post("/update", parser, function(req, res){
  var id = req.body.note;
  var info = req.body.info;
  arr[id] = info;
  res.send(arr);
});
