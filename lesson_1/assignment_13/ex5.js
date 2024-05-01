let taxonomicRanks = ["kingdom", "phylum", "class", "order", "famly", "genus", "species"];
let ranksObj = {}
let tds = document.querySelectorAll('td');
let tdsArr = Array.prototype.slice.call(tds);
  

taxonomicRanks.forEach(rank => {
  tdsArr.forEach(td => {
    let text = td.textContent.trim().replace(/\:/g,'');
    let nextSibling = td.nextElementSibling;
    if (nextSibling) {
      let nextText = nextSibling.textContent.trim();
      if (text.toLowerCase() === rank.toLowerCase()) {
        ranksObj[text] = nextText;
      }
    }
  });
});

console.log(ranksObj);


//LS solution
// let keys = ['Kingdom', 'Phylum', 'Clade', 'Class', 'Order', 'Suborder', 'Family',
//             'Genus', 'Species'];
// let classification = {};
// let tds = document.querySelectorAll('.infobox td');
// let cell;
// let link;

// for (let index = 0; index < tds.length; index += 1) {
//   cell = tds[index];

//   keys.forEach(key => {
//     if (cell.textContent.indexOf(key) !== -1) {
//       link = cell.nextElementSibling.firstElementChild;
//       classification[key] = link.textContent;
//     }
//   });
// }

// console.log(classification);

