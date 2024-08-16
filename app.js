var express = require("express");
var app = express();

const port = process.env.PORT || 8000
var server = app.listen(port, function(){
    console.log("Node.js is listening to PORT: http://localhost:" + server.address().port + "/server");
});

var text = "GET Request to the Express.js server";
app.get("/server", function(req, res, next){
    res.send({ message: text});
});