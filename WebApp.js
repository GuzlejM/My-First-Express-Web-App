var express = require("express");
var app = express();

//First objective
//Prints - "Hi there, welcome to my assignment!"
app.get("/", function(req, res) {
    res.send("Hi there, welcome to my assignment!");
});


//Second objective
//This is easy as you can see
app.get("/speak/pig", function(req, res) {
    res.send("The pig says 'Oink'");
});

app.get("/speak/cow", function(req, res) {
    res.send("The cow says 'Moo'");
});

app.get("/speak/dog", function(req, res) {
    res.send("The dog says 'Woof Woof'");
});

//Third Objective - 
app.get("/repeat/3", function(req, res) {
    res.send('"hello hello hello"');
});

app.get("/repeat/5", function(req, res) {
    res.send('"hello hello hello hello hello"');
});

app.get("/repeat/2", function(req, res) {
    res.send('"blah blah"');
});

//If you try any other not assigned route this prints out
app.get("*", function(req, res) {
    res.send("Sorry, page not found...What are you doing with your life?");
});


//tell Express to listen for requests (start server)
var port = process.env.PORT || 3002;
app.listen(port, function() {
    console.log("Server Has Started!");
})
