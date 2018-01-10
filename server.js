var express= require("express");
var app = express();
var port =8000;
var bp = require("body-parser");
var session=require("express-session");
var path = require("path");
app.use(bp.urlencoded());
app.use(express.static(path.join(__dirname,"/view")));
app.use(session({secret:"secretkey"}));
app.set("views",path.join(__dirname,"/views"));
app.set("view engine","ejs");
app.get("/",function(req,res){
    
    if(req.session.counter){
        req.session.counter++;
        res.render("index",{info: req.session.counter});
     } else {
        req.session.counter = 1;
        res.render("index",{info: req.session.counter});
     }
    
});
app.get("/count",function(req,res){
    res.redirect("/");
});

app.get("/reset",function(req,res){
    req.session.counter=0;
    res.redirect("/");
});
app.listen(port,function(){
    console.log("listening");
});