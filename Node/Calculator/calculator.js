const express = require("express");
const bodyParser = require("body-parser");
const app = express();


// //get method sending hello world
// app.get("/", function(req, res){
//     res.send("Hello World!");
// });

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})


//post route
app.post("/", function(req, res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;

    res.send("Result of adding those two numbers: " + result);
})


app.listen(3070, function(){
    console.log("Server is running at 3070");
});