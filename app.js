var express = require('express'),
app = express(),
request = require('request'),
api = require('./api.js'),
dataset = require('./gb.js'),
moment = require('moment');
require('dotenv').load();

app.listen(3000, function () {
  console.log('WeatherNode listening on port 3000!')
  function consumeapi(callback){
    api.get(function(err, result){
      var temp = (result.main.temp - 273.15)
      var dt = moment().format('YYYY-MM-DDThh:mm:ss', moment.ISO_8601);
      var temperature = { datetime: dt, temperature: temp};
      dataset.geckopush(temperature);
      callback();
    });
  };
  function apipoll(){
    setTimeout(function(){
      consumeapi(apipoll);
    }, 60000);
  };
  consumeapi(apipoll);
});
