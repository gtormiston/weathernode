require('dotenv').load();
var API_KEY = process.env.GECKO_API_KEY;
var gb = require('geckoboard')(API_KEY);

// gb.ping(function (err) {
//   if (err) {
//     console.error(err);
//     return;
//   }
//
//   console.log('Authentication successful');
// });

module.exports = {
  geckopush: function(data){

  gb.datasets.findOrCreate(
   {
     id: 'temperature.by_minute',
     fields: {
       temperature: {
         type: 'number',
         name: 'Temperature'
       },
       datetime:{
         type: 'datetime',
         name: 'Datetime'
       }
     }
   },
   function (err, dataset) {
     if (err) {
       console.error(err);
       return;
     }
     dataset.put(
     [ data ],
     function (err) {
       if (err) {
         console.error(err);
         return;
       }
       console.log('Data pushed to dataset');
       }
     );
   }
  );
 }
}
