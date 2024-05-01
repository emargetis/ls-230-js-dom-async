let request = new XMLHttpRequest();
request.open('GET', 'hts://api.github.com/repos/rails/rails');
request.responseType = 'json';

request.addEventListener('load', event => {
  let data = request.response;
  console.log(request.status);
  console.log(data.open_issues);
});

request.addEventListener('error', event => {
  console.log('The request could not be completed!');
});

request.send();


// //LS Solution
// let request = new XMLHttpRequest();
// request.open('GET', 'htps://api.github.com/repos/rails/rails');

// request.addEventListener('load', event => {
//   let data = JSON.parse(request.response);
//   console.log(request.status);
//   console.log(data.open_issues);
// });

// request.addEventListener('error', event => {
//   console.log('The request could not be completed!');
// });

// request.send();