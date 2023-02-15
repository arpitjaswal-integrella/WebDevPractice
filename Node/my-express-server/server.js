const express = require("express");
const app = express();


//get method: home page route(location, function)
app.get("/", function(req, res){
    res.send("<h1>Hello, my name is website!</h1>");
});

//get method for the contact page
app.get("/contact", function(req, res){
    res.send("<h1>Contact me at iamarpitjaswal@gmail.com</h1>")
});

//about page route
app.get("/about", function(req, res){
    res.send("This website is owned by Arpit Jaswal, who is trying to learn creating routes")
});

//hobbies route
app.get("/hobbies", function(req, res){
    res.send("Find below the list of my hobbies: <br/> <ul><li>Chess</li><li>Philosopy</li><li>Music</li></ul>")
});


app.listen(3069, function(){
    console.log("Server has started running on port 3069.");
});

