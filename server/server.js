const express = require('express');
const fs = require('fs');
const helpers = require('./helpers/helpers.js');
const app = express();
const db = require('./dbconfig.js');
const bodyParser = require('body-parser');
const controller = require('./controller/routesController.js');
const morgan = require('morgan');


app.set('port', (process.env.API_PORT || 3001));

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json 
app.use(bodyParser.json());

app.use(morgan('combined'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/route', (req, res) => {
    console.log('request recieved', req.query.flight_number);
    controller.getRoute(req, res);
  });

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});

app.get('/api/route/initialize', function(req, res) {
  helpers.updateSqliteTable(req, res);
});
