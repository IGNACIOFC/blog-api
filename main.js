// Getting posts info

var posts = {
  "url": "https://jsonplaceholder.typicode.com/posts",
  "method": "GET",
  "timeout": 0,
  "headers": {
    "Cookie": "__cfduid=d6bca52117cba066e36bb96da04bf29bc1610613081"
  },
};  

$.ajax(posts).done(function (response) {
  console.log(response);
  response.forEach(post => {
    const title = post.title;
    const body = post.body;
    const postDiv = $('<div class="post"></div>')
    const divTitle = $('<div class="post-title"></div>');
    const divBody = $('<div class="post-body"></div>');
    divTitle.text(title).appendTo(postDiv);
    divBody.text(body).appendTo(postDiv);
    postDiv.appendTo("#blog")
  })
});

// Getting the users info

var settings = {
    "url": "https://jsonplaceholder.typicode.com/users?",
    "method": "GET",
    "timeout": 0,
    "headers": {
      "Cookie": "__cfduid=d6bca52117cba066e36bb96da04bf29bc1610613081"
    },
  };
  
// $.ajax(settings).done(function (response) {
//   console.log(response);
//   response.forEach(element => {
//       const valor = $("#blog").text();
//       $("#blog").text(valor + element.id + element.name + element.email)

//   });
// });
