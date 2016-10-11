const db = require('../dbconfig.js');
const Route = require('../models/route.js');
const Routes = require('../collections/routes.js');
var Promise = require('bluebird');


var getRoute = function(req, res) {
  var flightnumber = req.query.flight_number;
  new Route({flight_number: flightnumber}).fetch().then(function(flights) {
    if(!flights) {
      console.log('no match');
      res.send('no match');
    } else {
      console.log('match', flights);
      res.send({flight: flights.get('flight_number'), arrival: flights.get('arrival'), departure: flights.get('departure')});
      
    }
  });




};

module.exports.getRoute = getRoute;