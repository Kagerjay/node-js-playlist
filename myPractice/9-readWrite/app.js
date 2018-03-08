
/*==================================*/
/* Synchronous */
/*==================================*/
// var fs = require('fs');
//
// var readMe = fs.readFileSync('readMe.txt', 'utf8'); // synchronous
// fs.writeFileSync('writeMe.txt', readMe);
// console.log(readMe);

/*==================================*/
/* ASYNC */
/*==================================*/
var fs = require('fs');

fs.readFile('readMe.txt', 'utf8', function(err,data){
  fs.writeFile('writeMe.txt', data);
});
