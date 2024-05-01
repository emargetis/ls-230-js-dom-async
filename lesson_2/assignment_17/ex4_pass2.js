const promise1 = new Promise((resolve, reject) => {
  console.log("foo");
  resolve();
  console.log("bar");
});

promise1.then(() => {
  console.log("baz");
});

console.log("qux");

//foo
//bar
//qux
//baz

//When a promise is constructed, the callback is immediately invoked,
//therefore `foo` will be logged to the console first then the promise
//will be marked as resolved, but the callback within `then` will not be
//run until after the synchronous code runs. Therefore, `bar` will be logged
//to the console next and then `qux`. Finally, `baz` will be logged to the
//console.