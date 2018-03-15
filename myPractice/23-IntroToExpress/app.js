var express = require('express'); // required module
var app = express(); //setup

// "this is the homepage" on http://127.0.0.1:3000/
app.get('/', function(req, res){
  res.send('this is the homepage');
});
app.get('/contact', function(req, res){
  res.send('this is the contact page');
});

app.listen(3000); // listen to port
