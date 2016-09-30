var express = require('express');
var app = express();
var request = require('request');
var api = require('./api.js');
var moment = require('moment')

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('WeatherNode listening on port 3000!')
  function consumeapi(callback){
    api.get(function(err, result) {
      var temp = result.main.temp - 273.15
      var dt = moment().format('YYYY-MM-DDThh:mm:ssTZD');
      console.log(dt)

      //post result to geckoboard dataset
      //postresults(result.main.temp - 273.15);
      callback();
    });
  };
  function consumepoll(){
    setTimeout(function(){
      consumeapi(consumepoll);
    }, 60000);
  };
  consumeapi(consumepoll);

  // function postresults(callback){
  //   api.post(function(err,result){
  //     console.log(result)
  //     callback();
  //   });
  // };

});
