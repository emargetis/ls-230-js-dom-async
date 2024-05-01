let request = new XMLHttpRequest();
request.open('POST', 'https://ls-230-web-store-demo.herokuapp.com/v1/products');
request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
request.setRequestHeader('Authorization', 'token AUTH_TOKEN');

let data = {
  name: 'Pen',
  sku: 'abc',
  price: 4
}

let json = JSON.stringify(data);

request.addEventListener('load', (e) => {
  console.log(`This product was added: ${request.responseText}`);
})

request.send(data);

