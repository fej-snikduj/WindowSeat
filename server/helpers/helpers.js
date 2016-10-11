const flights = require('../flight_airport_codes.js');
const db = require('../dbconfig.js');
const Route = require('../models/route.js');
const Routes = require('../collections/routes.js');
var Promise = require('bluebird');


var testflights = [
{
      "flight_number": "AF2",
      "departure": "CDG",
      "arrival": "ORY"
    },
    {
      "flight_number": "AF1",
      "departure": "ORY",
      "arrival": "CDG"
    },
    {
      "flight_number": "KE1",
      "departure": "RJAA",
      "arrival": "KLAX"
    },
    {
      "flight_number": "UA287",
      "departure": "MDT",
      "arrival": "ORD"
    },
    {
      "flight_number": "VS21",
      "departure": "LHR",
      "arrival": "IAD"
    }
]
var i = 0;
var updateSqliteTable = function() {
    var newRoute = new Route(flights[i]);
    newRoute.save().then(function(route) {
      i++;
      console.log('movingtonextrecord');
      if (i < flights.length - 1){
        updateSqliteTable(); 
      } else {
        return;
      }
    });
}



module.exports = updateSqliteTable;