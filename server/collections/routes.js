var db = require('../dbconfig');
var Route = require('../models/route');

var Routes = new db.Collection();

Routes.model = Route;

module.exports = Routes;
