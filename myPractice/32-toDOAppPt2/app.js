// KEY POINTS
// EJS for templating engine (fromtend html)
// Express middleware to allow frontend JS, frontend CSS, and images
// Open up a port, setup the controller module/require, and fire it
// Controller is the server handling requests

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
