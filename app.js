//Requiring the different needed packages
require("dotenv").config();
const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

//Declaring global variables
var hexJson;
var temp;
var description;
var icon;
//Initializing express into app
const app = express();

//Making use of body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));

//Making a get request to open weather api
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");

  // res.setHeader('Content-Type', 'text/html');

  // const imageUrl = 'https://openweathermap.org/img/wn/' + icon + '@2x.png';
  // res.write('The temperatures in London are: ' + temp  + '<br/>');
  // res.write('The weather is ' + description);
  // res.write(' <img src="' + imageUrl + '"/>');
});

//Post request
app.post("/", function (req, res) {
  var city = req.body.city;

  https
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q='+city+'&units=metric&appid=${process.env.apiid}&lang=en`,
      function (response) {
        console.log("Status Code: " + response.statusCode);

        response.on("data", function (d) {
          hexJson = JSON.parse(d);
          console.log(hexJson);
          temp = hexJson?.main?.temp;
          description = hexJson?.weather[0]?.description;
          icon = hexJson?.weather[0]?.icon;
        });
      }
    )
    .on("error", function (e) {
      console.log(e);
    });

  res.setHeader("Content-Type", "text/html");

  const imageUrl = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
  res.write("The temperature in" + city + "is: " + temp + "<br/>");
  res.write("The weather is " + description);
  res.write(' <img src="' + imageUrl + '"/>');

  console.log(req.body.city);
  res.send();
});

app.listen(3000, function () {
  console.log("Server successfully started");
});
