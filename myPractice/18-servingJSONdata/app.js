var http = require('http');
var fs = require('fs'); // nodeJS object


var server = http.createServer(function(req,res){
  console.log('request was made: ' + req.url);
  res.writeHead(200, {'Content-Type': 'application/json'}); // was text/html
  var myObj = {
    name: 'Ryu',
    job: 'Ninja',
    age: 29
  }
  res.end(JSON.stringify(myObj)); // make object into a string so can use.
});

server.listen(3000, '127.0.0.1');
console.log('yo dawgs, now listening to port 3000');
