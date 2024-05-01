let promise = new Promise((resolve, reject) => {
  setTimeout(() => reject("Error: Launch School"), 2000);
});

promise.then((retVal) => console.log(retVal))
       .catch((err) => console.log(err));