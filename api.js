require('dotenv').load();
var API_KEY = process.env.OWM_KEY;
var http = require('http');

module.exports = {
  get: function(callback) {
    var req = http.request({
      hostname: 'api.openweathermap.org',
      path: '/data/2.5/weather?q=London,uk&appid=' + API_KEY
    }, function(response) {
      var data = '';
      response.on('data', function(chunk) {
        data += chunk;
      });
      response.on('end', function() {
        callback(null, JSON.parse(data));
      });
    });
    req.end();
  }
};
