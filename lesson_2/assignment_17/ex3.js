const promise = new Promise(function (resolve, reject) {
  resolve("I am a Promise");
});

promise.then(value => console.log(value));
console.log("I am NOT a Promise");

/* 
The above code will log 'I am NOT a Promise' then 'I am a Promise' to the
console because synchronous code is run before any asynchronous code
*/