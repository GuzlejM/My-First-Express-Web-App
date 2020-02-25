var express = require("express");
var app = express();

//Prints - "Hi there, welcome to my assignment!"
app.get("/", function(req, res) {
    res.send("Hi there, welcome to my assignment!");
});

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

//If you try any other not assigned route this prints out
app.get("*", function(req, res) {
    res.send("Sorry, page not found...What are you doing with your life?");
});


//tell Express to listen for requests (start server)
var port = process.env.PORT || 3002;
app.listen(port, function() {
    console.log("Server Has Started!");
})
