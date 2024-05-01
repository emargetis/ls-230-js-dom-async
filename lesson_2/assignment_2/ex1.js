function startCounting() {
  let counter = 0;
  
  return setInterval(() => {
    counter += 1;
    console.log(counter);
  }, 1000);
}

let id = startCounting();

function stopCounting() {
  clearInterval(id);
}

setTimeout(stopCounting, 5000);


// //LS Solution
// let counterId;

// function startCounting() {
//   let count = 0;
//   counterId = setInterval(() => {
//     count += 1;
//     console.log(count);
//   }, 1000);
// }

// function stopCounting() {
//   clearInterval(counterId);
// }