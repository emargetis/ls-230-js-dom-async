function startCounting() {
  let counter = 0;
  
  setInterval(() => {
    counter += 1;
    console.log(counter);
  }, 1000);
}

startCounting();