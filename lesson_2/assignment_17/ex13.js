const test = Promise.reject("A");

(async () => {
  try {
    console.log(await test);
  } catch {
    console.log("E");
  } finally {
    console.log("B");
  }
})();

/*
E
B

The error will bubble up and the console.log statement in A will not be executed,
in other words, it will be bypassed.
*/