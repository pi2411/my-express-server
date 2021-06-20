//jshint esversion:6

const express = require("express");
const app = express();
app.get("/",function(req,res){
  res.send("<h1>Hello , World!</h1>");
});
app.get("/contact",function(req,res){
  res.send("Contact me at gmail addres: ygalna9764@gmail.com");
});
app.get("/aboute",function(req,res){
  res.send("I am ygal and i love beer and code");
});
app.get("/hobbies",function(req,res){
  res.send("<ul><li>cofee</li><li>beer</li><li>move</li></ul>");
});

app.listen(3000,function(){
  console.log("Server starter listen on port : 3000");
});
