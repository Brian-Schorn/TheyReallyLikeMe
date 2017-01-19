var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var songs = require('./data.json');
var app = express();


//Makes everything in the public folder visible
app.use(express.static('public'));
//Coverts any URL Encoded body into a javascript object
app.use(bodyParser.urlencoded({extended: true}));

//Respond to get request with the full file name/path of index.html in the public folder
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});





app.listen(3000);
