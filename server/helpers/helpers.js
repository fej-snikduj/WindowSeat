// const flights = require('../flight_airport_codes.js');
const db = require('../dbconfig.js');
const Route = require('../models/route.js');
const Routes = require('../collections/routes.js');
var Promise = require('bluebird');


var i = 0;
var updateSqliteTable = function() {
    //the following code is commented out so as to not to accidentially invoke an unnecessary table update - which is time consuming.
    // var newRoute = new Route(flights[i]);
    // newRoute.save().then(function(route) {
    //   i++;
    //   console.log('movingtonextrecord');
    //   if (i < flights.length - 1){
    //     updateSqliteTable(); 
    //   } else {
    //     return;
    //   }
    // });
};





module.exports.updateSqliteTable = updateSqliteTable;