// var http = require('http');
// var fs = require('fs'); // nodeJS object
//
//
// var server = http.createServer(function(req,res){
//   console.log('request was made: ' + req.url);
//   res.writeHead(200, {'Content-Type': 'application/json'}); // was text/html
//   res.end('feed me popcorn');
// });
//
// server.listen(3000, '127.0.0.1');
// console.log('yo dawgs, now listening to port 3000');

var http = require('http');
var fs = require('fs'); // nodeJS object


var server = http.createServer(function(req,res){
  console.log('request was made: ' + req.url);
  //http://127.0.0.1:3000/   or http://127.0.0.1:3000/home   brings user to index.html, anything else cannnot find
  if(req.url === '/home' || req.url === '/'){
    res.writeHead(200, {'Content-type': 'text/html'});
    fs.createReadStream(__dirname + '/index.html').pipe(res);
  // http://127.0.0.1:3000/contact  → brings user to contact.html
  } else if (req.url === '/contact'){
    res.writeHead(200, {'Content-type': 'text/html'});
    fs.createReadStream(__dirname + '/contact.html').pipe(res);
  // http://127.0.0.1:3000/api/ninjas → brings user to JSON data page
  } else if(req.url === '/api/ninjas'){
    var ninjas = [{name: 'ryu', age: 29}, {name: 'yoshi', age: 32}];
    res.writeHead(200, {'Content-type': 'application/json'});
    res.end(JSON.stringify(ninjas));
  } else {
    // 404 anything not mentioned above
    res.writeHead(200, {'Content-type': 'text/html'});
    fs.createReadStream(__dirname + '/404.html').pipe(res);
  }
});

server.listen(3000, '127.0.0.1');
console.log('yo dawgs, now listening to port 3000');
