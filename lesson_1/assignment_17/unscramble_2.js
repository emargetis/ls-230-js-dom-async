let body = document.body;
let main = document.querySelector('main');
let header = document.querySelector('nav').parentElement;

//move header to top
body.insertBefore(header, main);
let h1 = document.querySelector('body h1');
header.insertBefore(h1, header.firstElementChild);

//swap images
let chinstickImg = document.querySelector('[src="images/chin_stick.jpg"]');
let babymopImg = document.querySelector('[src="images/baby_mop.jpg"]');
let chinstickFigure = babymopImg.parentElement;
let babymopFigure = chinstickImg.parentElement;
chinstickFigure.insertBefore(chinstickImg, babymopImg);
babymopFigure.insertAdjacentElement("afterbegin", babymopImg);

//move figures to article
let article = document.querySelector('article');
article.insertAdjacentElement("beforeend", chinstickFigure);
article.insertAdjacentElement("beforeend", babymopFigure);