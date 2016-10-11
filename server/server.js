const express = require('express');
const fs = require('fs');
const helpers = require('./helpers/helpers.js');
const app = express();
const db = require('./dbconfig.js');


app.set('port', (process.env.API_PORT || 3001));

app.get('/api/route', (req, res) => {

  });

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});

app.get('/api/route/initialize', function(req, res) {
  helpers(req, res);
});
