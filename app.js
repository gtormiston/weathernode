var express = require('express');
var app = express();
var request = require('request');

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');

  //   request('http://www.google.com', function (error, response, body) {
  //     if (!error && response.statusCode == 200) {
  //       console.log(body) // Show the HTML for the Google homepage.
  //     }
  // })

});
