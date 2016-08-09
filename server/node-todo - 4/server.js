// imports
var express = require('express'); // rest framework
var mongoose = require('mongoose'); // db framework
var morgan = require('morgan'); // log
var bodyParser = require('body-parser'); //parser

// configurations
var app = express();
var port = process.env.PORT || 8080;
var db = 'mongodb://mo-165f80f3c.mo.sap.corp:27017/koko2';

// add log support
app.use(morgan('dev')); // log every request to the console

// add parser
app.use(bodyParser.json()); // parse application/json

// connect to mongodb
mongoose.connect(db);

// load api
require('./app/api.js')(app);

// listen on port
app.listen(port);
console.log("App listening on port " + port);
