let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Launch School"), 2000);
});

promise.then((retVal) => console.log(retVal));