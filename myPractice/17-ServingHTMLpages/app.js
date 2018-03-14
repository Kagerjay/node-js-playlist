var http = require('http');
var fs = require('fs'); // nodeJS object


var server = http.createServer(function(req,res){
  console.log('request was made: ' + req.url);
  res.writeHead(200, {'Content-Type': 'text/html'}); // was text/plain
  var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8'); // was readMe.txt
  // var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');
  // myReadStream.pipe(myWriteStream);
  // res.end('Hey ninjas');
  myReadStream.pipe(res); // above comments is equivalent
});

server.listen(3000, '127.0.0.1');
console.log('yo dawgs, now listening to port 3000');
