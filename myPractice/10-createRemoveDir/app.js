var fs = require('fs');

/* SYNC CREATE AND DELETE */
// fs.mkdir('stuff');
// fs.rmdir('stuff');

/* ASYNC CALLBACK METHOD */
// fs.mkdir('stuff', function(){
//   fs.readFile('readMe.txt', 'utf8', function(err,data){
//     fs.writeFile('./stuff/writeMe.txt', data);
//   });
// })

/* ASYNC DELETE */
fs.unlink('./stuff/writeMe.txt', function(){ // Must remove contents in dir before deleting dir
  fs.rmdir('stuff');
});
