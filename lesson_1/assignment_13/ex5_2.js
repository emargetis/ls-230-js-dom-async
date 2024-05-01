let keys = ["Kingdom", "Phylum", "Class", "Order", "Family", "Genus", "Species"];
let tds = document.querySelectorAll('.infobox td');
let obj = {};

keys.forEach(key => {
  tds.forEach(td => {
    if ((key + ':') === td.textContent.trim()) {
      obj[key] = td.nextElementSibling.textContent.trim();
    }
  })
})

console.log(obj);