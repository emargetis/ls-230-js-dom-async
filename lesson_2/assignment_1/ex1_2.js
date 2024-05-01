function delayLog() {
  for (let counter = 1; counter <= 10; counter += 1) {
    setTimeout(() => {
      console.log(counter);
    }, counter * 1000);
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