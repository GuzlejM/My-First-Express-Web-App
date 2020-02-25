var express = require("express");
var app = express();

//Prints - "Hi there, welcome to my assignment!"
app.get("/", function(req, res) {
    res.send("Hi there, welcome to my assignment!");
});

app.get("/:arena", function(req, res) {
    res.send("Welcome to Arena!");
});

app.get("/", function(req, res) {
    res.send("Hi there!");
});

app.get("/", function(req, res) {
    res.send("Hi there!");
});

//If you try any other not assigned route this prints out
app.get("*", function(req, res) {
    res.send("Sorry, page not found...What are you doing with your life?");
});


//tell Express to listen for requests (start server)
var port = process.env.PORT || 3001;
app.listen(port, function() {
    console.log("Server Has Started!");
})
