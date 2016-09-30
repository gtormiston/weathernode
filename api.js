var http = require('http');

module.exports = {
  get: function(callback) {
    var req = http.request({
      hostname: 'api.openweathermap.org',
      path: '/data/2.5/weather?q=London,uk&appid=859bb0993d1fd7f249aeb2bd2bbc30d2'
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
  },

  post: function(data, callback) {
    var req = http.request({
      // Send to Geckoboard dataset
      hostname: '',
      path: '/',
      method: 'POST'
    }, function(response) {
      var data = '';
      response.on('data', function(chunk) {
        data += chunk;
      });

      response.on('end', function() {
        callback(null, JSON.parse(data));
      });
    });

    req.write(JSON.stringify(data));

    req.end();
  }
};
