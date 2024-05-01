let request = new XMLHttpRequest();
request.open('GET', 'https://api.github.com/repos/rails/rails');
request.responseType = 'json';

request.addEventListener('load', event => {
  let data = request.response;
  console.log(request.status);
  console.log(data.open_issues);
});


request.send();

// //LS Solution
// let request = new XMLHttpRequest();
// request.open('GET', 'https://api.github.com/repos/rails/rails');

// request.addEventListener('load', event => {
//   let data = JSON.parse(request.response);
//   console.log(request.status);
//   console.log(data.open_issues);
// });

// request.send();