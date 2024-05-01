document.addEventListener('DOMContentLoaded', () => {
  // (function() {
    let inventory = {
      lastId: 0,
      collection: [],
      
      setDate: function() {
        let date = new Date();
        document.querySelector("#order_date").textContent = date.toUTCString();
      },
      
      cacheTemplate: function() {
        let iTmpl = document.querySelector("#inventory_item");
        this.template = Handlebars.compile(iTmpl.innerHTML);
        iTmpl.remove()
      },
      
      add: function() {
        this.lastId++;
        let item = {
          id: this.lastId,
          name: "",
          stock_number: "",
          quantity: 1
        };
        this.collection.push(item);
  
        return item;
      },
      
      remove: function(id) {
        this.collection = this.collection.filter(function(item) {
          return item.id !== id;
        });
      },
      
      get: function(id) {
        let found_item;
  
        this.collection.forEach(function(item) {
          if (item.id === id) {
            found_item = item;
          }
        });
        
        return found_item;
      },
      
      update: function(item) {
        let id = this.findID(item);
        let itemInternal = this.get(id);
  
        itemInternal.name = item.querySelector("[name^=item_name]").value;
        itemInternal.stock_number = item.querySelector("[name^=item_stock_number]").value;
        itemInternal.quantity = item.querySelector("[name^=item_quantity]").value;
      },
      
      newItem: function(e) {
        e.preventDefault();
        let item = this.add();
        let itemHTML = this.template(item);
        document.querySelector("#inventory")
                .insertAdjacentHTML('beforeend', itemHTML);
      },
      
      findParent: function(e) {
        return e.target.closest("tr");
      },
      
      findID: function(item) {
        return +item.querySelector("input[type=hidden]").value;
      },
      
      deleteItem: function(e) {
        e.preventDefault();
        if (e.target.classList.contains('delete')) {
          let item = this.findParent(e);
          item.remove();
          this.remove(this.findID(item));
        }
      },
      
      updateItem: function(e) {
        if (e.target.tagName === "INPUT") {
          let item = this.findParent(e);
    
          this.update(item);
        }
      },
      
      bindEvents: function() {
        document.querySelector("#add_item")
                .addEventListener("click", this.newItem.bind(this));
        document.querySelector("#inventory")
                .addEventListener("click", this.deleteItem.bind(this));
        document.querySelector("#inventory")
                .addEventListener("focusout", this.updateItem.bind(this));
      },
      
      init: function() {
        this.setDate();
        this.cacheTemplate();
        this.bindEvents();
      }
    };
    
    inventory.init();
  // })();
});
