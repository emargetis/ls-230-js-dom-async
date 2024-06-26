let request = new XMLHttpRequest();
request.open('POST', 'https://ls-230-web-store-demo.herokuapp.com/v1/products');
request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
request.setRequestHeader('Authorization', 'token AUTH_TOKEN');

let data = { name: 'Mastery', sku: '12A4', price: 4.99 };
let json = JSON.stringify(data);

request.addEventListener('load', () => {
  console.log(`This product was added: ${request.responseText}`);
});

request.send(json);

// //LS Solution
// function createProduct(productData) {
//   let json = JSON.stringify(productData);
//   let request = new XMLHttpRequest();

//   request.open('POST', 'https://ls-230-web-store-demo.herokuapp.com/v1/products');
//   request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
//   request.setRequestHeader('Authorization', 'token AUTH_TOKEN');

//   request.addEventListener('load', () => {
//     console.log(`This product was added: ${request.responseText}`);
//   });

//   request.send(json);
// }

// createProduct({
//   name: 'HB pencil',
//   sku: 'hbp100',
//   price: 50,
// });

