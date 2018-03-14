var http = require('http');
var fs = require('fs'); // nodeJS object

var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt'); // read a stream and write it out

myReadStream.on('data', function(chunk){
  console.log('new chunk received:');
  myWriteStream.write(chunk); // write to writeMe.txt
});
// The difference between this method from read/write in original method, is we're getting data faster in small chunks
