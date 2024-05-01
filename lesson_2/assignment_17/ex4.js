const promise1 = new Promise((resolve, reject) => {
  console.log("foo");
  resolve();
  console.log("bar");
});

promise1.then(() => {
  console.log("baz");
});

console.log("qux");

/*
The above code will log:
qux
foo
baz

bar will not be logged because the `resolve()` method immediately returns
*/

/*
WRONG

It will be:
foo
bar
qux
baz

because the callback function for the promise will be invoked when the promise
constructor function is inovked on line 1. Then the
*/