var db = require('../dbconfig');

var Route = db.Model.extend({
  tableName: 'routes',
  hasTimestamps: true
});

module.exports = Route;
