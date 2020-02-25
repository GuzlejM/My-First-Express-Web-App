var express = require("express");
var app = express();

//Prints - "Hi there, welcome to my assignment!"
app.get("/", function(req, res) {
    res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:menu", function(req, res) {
    let animal = req.params.menu;
    if(animal = "pig") {
        sound = "'Oink'"
    };
    res.send("The " + animal + " says " + sound);
});

app.get("/speak/:menu", function(req, res) {
    let animal = req.params.menu;
    if(animal = "cow") {
        sound = "'Moo'"
    };
    res.send("The " + animal + " says " + sound);
});

app.get("/speak/:menu", function(req, res) {
    let animal = req.params.menu;
    if(animal = "dog") {
        sound = "'Woof Woof'"
    };
    res.send("The " + animal + " says " + sound);
});

app.get("/speak/:menu", function(req, res) {
    let animal = req.params.menu;
    if(animal = "pig") {
        sound = "'Oink'"
    };
    if(animal = "cow") {
        sound = "'Moo'"
    };
    if(animal = "dog") {
        sound = "'Woof Woof'"
    };
    res.send("The " + animal + " says " + sound);
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
