let promiseTest = new Promise(function (resolve, reject) {
  setTimeout(() => reject("Error: Not Launch School"), 2000);
});

promiseTest.then((returnVal) => console.log(returnVal))
           .catch((err) => console.log(err));