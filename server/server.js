const express = require('express');
const fs = require('fs');
const helpers = require('./helpers/helpers.js');
const app = express();
const db = require('./dbconfig.js');
const bodyParser = require('body-parser')


app.set('port', (process.env.API_PORT || 3001));

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json 
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/api/route', (req, res) => {
    console.log('request recieved', req.body.value);
    res.end();

  });

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});

app.get('/api/route/initialize', function(req, res) {
  helpers(req, res);
});
