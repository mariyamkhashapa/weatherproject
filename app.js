const express = require("express");
const https = require("https");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }))
app.get("/", function(req, res) {

    console.log("hello there");
    const url = ("https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=6896cdde74f7c038eb533da4a1069c38");
    https.get(url, function(response) {
        console.log(response.statusCode);
        response.on("data", function(data) {
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            console.log(temp);
            res.send("the tempreture is " + temp + "celisius")
        })
    });

});
app.listen(3000, function() {
    console.log("the server is running now");
});