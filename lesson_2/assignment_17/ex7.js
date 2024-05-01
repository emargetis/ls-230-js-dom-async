const promise = new Promise((resolve, reject) => {
  resolve("Got it!");
  reject("Oops.");
  resolve("Again!");
});

promise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
  
/*
The above code will log 'Again!' to the console because that is the last
value that the callback provided to the promise will generate.
*/

/*
WRONG - The above code will log 'Got it!' to the console because any additional
attempts to settle the promise will fail silently and be ignored.
*/