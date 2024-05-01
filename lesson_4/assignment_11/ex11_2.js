let post = {
  title: 'Lorem ipsum dolor sit amet',
  published: 'April 1, 2015',
  body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.'
};

let post2 = {
  title: 'Erik Margetis',
  published: 'April 1, 2019',
  body: 'Sed ut perspiciatis unde omnis is'
};

post.body = '<p>' + post.body + '</p>';
post.tags = ['hi', 'hello', 'sup'];

let posts = [];
posts.push(post);
posts.push(post2);


Handlebars.registerPartial("tagPartial", document.querySelector('#tagPartial').innerHTML);
let template = Handlebars.compile(document.querySelector('#post').innerHTML);
document.body.innerHTML = template({posts});