function delayLog() {
  for (let idx = 1; idx <= 10; idx += 1) {
    setTimeout(() => {console.log(idx)}, idx * 1000);
  }
}


delayLog();
// 1  // 1 second later
// 2  // 2 seconds later
// 3  // 3 seconds later
// 4  // etc...
// 5
// 6
// 7
// 8
// 9
// 10

// //LS solution
// function makeLogger(number) {
//   return function() {
//     console.log(number);
//   }
// }

// function delayLog() {
//   for (let index = 1; index <= 10; index += 1) {
//     let logger = makeLogger(index);
//     setTimeout(logger, index * 1000);
//   }
// }