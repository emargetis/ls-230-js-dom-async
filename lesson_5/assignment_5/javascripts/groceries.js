document.addEventListener('DOMContentLoaded', () => {
  let form = document.querySelector('form');
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let item = document.querySelector('#name').value;
    let quantity = document.querySelector('#quantity').value || "1";
    
    let listItem = document.createElement('li');
    listItem.textContent = `${quantity} ${item}`;
    
    let list = document.querySelector('#grocery-list');
    list.appendChild(listItem);
    
    form.reset();
  });
})