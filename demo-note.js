var express = require("express");
var app = express();
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
