// var http = require('http');
//
// var server = http.createServer(function(req,res){
//   console.log('request was made: ' + req.url); //goto http://127.0.0.1:3000/hey  , produces consolelog
//   res.writeHead(200, {'Content-Type': 'text/plain'});  // response Header Type
//   res.end('Hey ninjas'); // response Header Data
// });
//
// server.listen(3000, '127.0.0.1'); // request = 3000 port, response = 127.0.0.1 IP
// console.log('yo dawgs, now listening to port 3000');

var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readMe.txt'); // reading chunks of data via a buffer

myReadStream.on('data', function(chunk){
  console.log()
}
