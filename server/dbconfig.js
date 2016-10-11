var path = require('path');
var knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: path.join(__dirname, '../db/windowseat.sqlite')
  },
  useNullAsDefault: true
});
var db = require('bookshelf')(knex);

db.knex.schema.hasTable('routes').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('routes', function (route) {
      route.increments('id').primary();
      route.string('flight_number', 255);
      route.string('departure', 255);
      route.string('arrival', 100);
      route.timestamps();
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

console.log('started sqlite3 connection');
module.exports = db;
