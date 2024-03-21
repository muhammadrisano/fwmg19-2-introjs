function sleepFor(sleepDuration, perintah){
  var now = new Date().getTime();
  while(new Date().getTime() < now + sleepDuration){ 
      /* Do nothing */ 
      // console.log(perintah);
  }
  console.log(perintah);
}








// synchronous

console.log('perintah 1');
sleepFor(2000, 'perintah 2')
// console.log('perintah 2');
console.log('perintah 3');

// asynchronous

// console.log('perintah 1');

// setTimeout(()=>{
// console.log('perintah 2');
// }, 1000)

// console.log('perintah 3');

