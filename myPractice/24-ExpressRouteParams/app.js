var express = require('express'); // required module
var app = express(); //setup

// "this is the homepage" on http://127.0.0.1:3000/
app.get('/', function(req, res){
  res.send('this is the homepage');
});
app.get('/contact', function(req, res){
  res.send('this is the contact page');
});
// http://127.0.0.1:3000/profile/123 → returns "You requested to see a profile with the id of 123"
app.get('/profile/:id', function(req,res){
  res.send('You requested to see a profile with the id of ' + req.params.id);
});
// http://127.0.0.1:3000/person/55 → returns "You requested a PERSON with the NAME of 55"
app.get('/person/:name', function(req,res){
  res.send('You requested a PERSON with the NAME of ' + req.params.name);
});

app.listen(3000); // listen to port
