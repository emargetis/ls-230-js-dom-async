let promiseTest = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("Launch School"), 2000);
});

promiseTest.then((returnVal) => console.log(returnVal));