"use strict";

var express = require("express");

var https = require("https");

var app = express();
app.get("/", function (req, res) {
  var url = "https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=6896cdde74f7c038eb533da4a1069c38";
  https.get(url, function (response) {
    console.log(response.statusCode);
    response.on("data", function (data) {
      var weatherData = JSON.parse(data);
      console.log(weatherData);
    });
  });
  res.send("server is running");
});
app.listen(3000, function () {
  console.log("the server is running now");
});