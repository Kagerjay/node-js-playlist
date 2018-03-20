var express = require('express');
var bodyParser = require('body-parser')
var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.get('/', function(req, res){
  res.render('index');
});

app.get('/contact', function(req, res){
  console.log(req.query);
  res.render('contact', {qs: req.query});
  // res.render('contact');
});

// This handles form requests. We're sending POST data from transform
// app.post is the server handling POST Data, and sending it to .EJS
app.post('/contact', urlencodedParser, function(req, res){
  console.log(req.body);
  // res.render('contact', {qs: req.query});
  res.render('contact-success', {data: req.body});
});

app.get('/profile/:name', function(req,res){
  var data = {age: 29, job: 'ninja', hobbies:['eating', 'fighting', 'fishing']};
  res.render('profile', {person: req.params.name, data: data});
});

app.listen(3000); // listen to port
