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
var fs = require('fs'); // nodeJS object

var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8'); // reading chunks of data via a buffer. //UTF8 makes chunks from binary to readable Data

// Listen for an event
myReadStream.on('data', function(chunk){ // chunk = packet of data
  console.log('new chunk received:');
  console.log(chunk); // without UTF8, Example response <Buffer 4c 6f 72 65 6d 20 69 70 73 75 6d 20 64 6f 6c 6f 72 20 73 69 74 20 61 6d 65 74 2c 20 63 6f 6e 73 65 63 74 65 74 75 72 20 61 64 69 70 69 73 63 69 6e 67 ... >
  console.log(chunk); // with UTF8, Example response: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis orci in pellentesque accumsan...."
});
