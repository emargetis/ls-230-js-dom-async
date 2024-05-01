fetch('hts://api.github.com/repos/rails/rails')
  .then((response) => {
    console.log(response.status);
    return response.json();
  }).then((json) => {
    console.log(json.open_issues);
  }).catch((error) => {
    console.log('The request could not be completed!');
  });
  
let request = new XMLHttpRequest();
request.open('GET', 'hts://api.github.com/repos/rails/rails');

request.addEventListener('load', (e) => {
  console.log(request.status);
  let data = JSON.parse(request.response);
  console.log(data.open_issues);
});

request.addEventListener('error', (e) => {
  console.log('The request could not be completed!');
});

request.send();
