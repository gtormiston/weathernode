var express = require('express');
var app = express();
var request = require('request');
var api = require('./api.js');

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('WeatherNode listening on port 3000!');
  api.get(function(err, result) {
    console.log(result)
  })//.on(err, function (e) {
    //console.log(e);
  //});
});
