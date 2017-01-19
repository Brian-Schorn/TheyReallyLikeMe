var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var info = require('./data.json');
var app = express();

var bLikes = 0;
var eLikes = 0;
var tLikes = 0;

//Makes everything in the public folder visible
app.use(express.static('public'));
//Coverts any URL Encoded body into a javascript object
app.use(bodyParser.urlencoded({extended: true}));

//Respond to get request with the full file name/path of index.html in the public folder
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/views/index.html'))
});

//Respond to a get request on the /bios path with the data.json array of objects
app.get('/bios', function(req, res) {
  res.send(info);

});

//on a get request on the /likes path, create an object with keys equal to names,
//and values of those keys equal to the respective number of likes for that person,
//then respond with that object.
app.get('/likes', function(req, res) {
  var likeInfo = {};

  likeInfo.BrianSchorn = bLikes;
  likeInfo.ErikNoonan = eLikes;
  likeInfo.TylerHerman = tLikes;

  console.log(likeInfo);
  res.send(likeInfo);

});

// info.forEach(function(person){
//   app.post('/likes'+person.name.replace(" ", ""), function(req, res) {
//     console.log("pressed: " + JSON.stringify(req.body).charAt(2).toLowerCase());
//     if()
//
//   });
//
// });

  app.post('/likes/BrianSchorn', function(req, res) {
    bLikes++;
    console.log(bLikes);
    res.sendStatus(200);
  });

  app.post('/likes/ErikNoonan', function(req, res) {
    eLikes++;
    res.sendStatus(200);
  });

  app.post('/likes/TylerHerman', function(req, res) {
    tLikes++;
    res.sendStatus(200);
  });



app.listen(3000);
