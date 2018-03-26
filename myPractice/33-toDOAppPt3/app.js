var express = require('express');
var todoController = require('./controllers/todoController'); // for fire controllers

var app = express();

// setup template engine
app.set('view engine', 'ejs');

// static Files
app.use(express.static('./public'));

// fire controllers
todoController(app);

// listen to port
app.listen(3000);
console.log('You are listening to port 3000');
// http://127.0.0.1:3000/todo , nothing is supposed to work yet
