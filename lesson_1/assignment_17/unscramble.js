//fix header
let header = document.body.querySelector('body > header');
let h1 = document.body.querySelector('main > h1');
header.insertBefore(h1, header.firstChild);
document.body.insertBefore(header, document.body.firstChild);

//move figures to article swap the images
let article = document.body.querySelector('main > section > article');
let chinStickFigure = article.nextElementSibling;

let section = document.body.querySelector('main > section');
let babyMopFigure = section.lastElementChild;

article.appendChild(chinStickFigure);
article.appendChild(babyMopFigure);

//swap photos
let babyMopImage = chinStickFigure.querySelector('img');
let chinStickImage = babyMopFigure.querySelector('img');
babyMopFigure.replaceChild(babyMopImage, chinStickImage);
chinStickFigure.insertBefore(chinStickImage, chinStickFigure.firstChild);


// //LS solution
// let header = document.querySelector("body > header");
// let h1 = document.querySelector("main > h1");
// header.insertBefore(h1, header.firstChild);
// document.body.insertBefore(header, document.body.firstChild);

// let [ chinStickFigure, babyMopFigure ] = document.querySelectorAll("figure");

// let babyMopImage = chinStickFigure.querySelector("img");
// let chinStickImage = babyMopFigure.querySelector("img");
// chinStickFigure.insertBefore(chinStickImage, chinStickFigure.firstChild);
// babyMopFigure.insertBefore(babyMopImage, babyMopFigure.firstChild);

// let article = document.querySelector("article");
// article.insertBefore(chinStickFigure, null);
// article.insertBefore(babyMopFigure, null);
