var express = require('express'); // required module
var app = express(); //setup

app.set('view engine', 'ejs'); // tell express to use EJS templating

app.get('/', function(req, res){
  // res.sendFile(__dirname + '/index.html'); // sending HTML file
  // res.render(__dirname +'/index.html');
  res.render('index'); // process ejs file
});
app.get('/contact', function(req, res){
  // res.sendFile(__dirname + '/contact.html');
  //  res.send('this is the contact page'); → old way
  res.render('contact');
});
app.get('/profile/:name', function(req,res){
  var data = {age: 29, job: 'ninja', hobbies:['eating', 'fighting', 'fishing']};
  res.render('profile', {person: req.params.name, data: data}); // pass to EJS, data.age, data.job, person
});

app.listen(3000); // listen to port
