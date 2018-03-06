// setTimeout(function(){
//   console.log('3 seconds have passed');
// },3000);

var time = 0;

// setInterval(function(){
//   time +=2;
//   console.log(time + ' seconds have passed');
// },2000); // 2 seconds passed , 4 seconds passed , 6seconds.....

var timer = setInterval(function(){
  time +=2;
  console.log(time + ' seconds have passed');
  if (time > 5){
    clearInterval(timer);
  }
},2000);  // 2,4,6 stop
