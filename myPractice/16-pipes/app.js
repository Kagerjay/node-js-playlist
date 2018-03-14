/* SIMPLE PIPE LINE */
// var http = require('http');
// var fs = require('fs'); // nodeJS object
//
// var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
// var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt'); // read a stream and write it out
//
// myReadStream.pipe(myWriteStream); // built in callback function for handling chunking Data

/* PIPES WITH HEADERS AND SERVER, SENDING PLAIN TEXT TO SERVER, ACCESS ON PORT 3000 */
var http = require('http');
var fs = require('fs'); // nodeJS object


var server = http.createServer(function(req,res){
  console.log('request was made: ' + req.url);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
  // var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');
  // myReadStream.pipe(myWriteStream);
  // res.end('Hey ninjas');
  myReadStream.pipe(res); // above comments is equivalent
});

server.listen(3000, '127.0.0.1');
console.log('yo dawgs, now listening to port 3000');
