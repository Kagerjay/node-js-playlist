var express = require('express');
var app = express();

app.set('view engine', 'ejs');

// Serving static files Middleware
app.use('/assets', express.static('assets')); //1st param matches the URL, 2nd param is local file

// // Middleware sample template
// app.use('/assets', function(req, res, next){
//   console.log(req.url);
//   next(); // required
// });

app.get('/', function(req, res){
  res.render('index');
});
app.get('/contact', function(req, res){
  res.render('contact');
});
app.get('/profile/:name', function(req,res){
  var data = {age: 29, job: 'ninja', hobbies:['eating', 'fighting', 'fishing']};
  res.render('profile', {person: req.params.name, data: data});
});

app.listen(3000); // listen to port
