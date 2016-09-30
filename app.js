var express = require('express');
var app = express();
var request = require('request');
var api = require('./api.js');

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('WeatherNode listening on port 3000!');

  function consumeapi(callback){
    api.get(function(err, result) {
      console.log(result)
      callback();
    });
  }

  function consumepoll(){
    setTimeout(function(){
      consumeapi(consumepoll);
    }, 15000);
  }

  consumeapi(consumepoll);

});
