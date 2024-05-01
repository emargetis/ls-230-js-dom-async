function startCounting() {
  let counter = 0;
  
  return setInterval(() => {
    counter += 1;
    console.log(counter);
  }, 1000);
}

let id = startCounting();

function stopCounting(id) {
  setTimeout(() => {
    clearInterval(id)
  }, 10000);
}

stopCounting(id);