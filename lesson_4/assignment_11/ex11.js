//Vanilla JS
document.addEventListener('DOMContentLoaded', () => {
  let template = document.querySelector('#post').innerHTML;
  let templateScript = Handlebars.compile(template);
  let partial = document.querySelector('#partial').innerHTML;
  let partialTemplate = Handlebars.registerPartial("tagPartial", partial);
  
  
  let post = {
    title: 'Lorem ipsum dolor sit amet',
    published: 'April 1, 2015',
    body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
  };
  
  post.body = '<p>' + post.body + '</p>';
  post.tags = ['Food', 'Cooking', 'Vegetables'];
  
  let post2 = {
    title: 'Lorem ipsum dolor sit amet',
    published: 'April 1, 2015',
    body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
  };
  
  let postsArr = []
  postsArr.push(post);
  postsArr.push(post2)
  
  
  let htmlInjection = templateScript({post: postsArr});
  
  document.body.innerHTML = htmlInjection;
})


// //jQuery
// document.addEventListener('DOMContentLoaded', () => {
//   let template = document.querySelector('#post');
  
//   let post = {
//     title: 'Lorem ipsum dolor sit amet',
//     published: 'April 1, 2015',
//     body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.'
//   };
  
//   let templateScript = Handlebars.compile(template);
  
//   let htmlInjection = templateScript(post);
  
//   document.body.append(htmlInjection);
// })