const promise = new Promise((resolve, reject) => {
  console.log("foo");
  reject();
  console.log("bar");
});

promise
  .then(() => {
    console.log("baz");
  })
  .catch(() => {
    console.log("qux");
  });

console.log("abc");

/*
foo
bar
abc
qux

The callback function inside the promise will get invoked first which will 
log `foo` then `bar`. Then the synchromous `abc` will be logged to the console.
Then the promise will be rejected which will then invoke the callback
in the catch statement which will log `qux` to the console.
*/