const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/", function(req, res){
    var height = parseFloat(req.body.height);
    var weight = parseFloat(req.body.weight);
    var y = height*height;
    var x = 703*weight;
    var BMI = x/y;
    res.send("Your BMI is " + BMI);
    // var num1 = Number(req.body.num1);
    // var num2 = Number(req.body.num2);
    // var result = num1 + num2;

    // res.send("Result of adding those two numbers: " + result);
})


app.listen(8080, function(){
    console.log("Server is listening on the port 8080");
})
