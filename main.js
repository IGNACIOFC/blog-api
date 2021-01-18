
$(document).ready(function() {

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
      const userId = post.userId;
      const postDiv = $(`<div class="post" postId ="${userId}"></div>`)
      const divTitle = $('<div class="post-title"></div>');
      const divBody = $('<div class="post-body"></div>');
      divTitle.text(title).appendTo(postDiv);
      divBody.text(body).appendTo(postDiv);
      postDiv.appendTo("#blog");
    });

    // Modal Window Content

    $(".post").click(function(){
      const modal = $(".bg-modal");
      let modalTitle = $("#modalTitle");
      let modalBody = $("#modalBody");
      modal.css("display", "flex");
      modalTitle.html($(this).children(".post-title").html());
      modalBody.html($(this).children(".post-body").html());

      console.log();
      var users = {
        "url": `https://jsonplaceholder.typicode.com/users?id=${$(this).attr("postId")}`,
        "method": "GET",
        "timeout": 0,
      };

      $.ajax(users).done(function (response) {
        console.log(response[0].name);
        let userName = response[0].name;
        let userEmail = response[0].email;
        let modalName = $("#modalName");
        let modalEmail = $("#modalEmail");

        modalName.html(userName);
        modalEmail.html(userEmail);
      });

      // Modal close Button

      $(".close").click(function(){
        modal.css("display", "none");
      });
    });

  });




  // Getting the users info

  var users = {
      "url": "https://jsonplaceholder.typicode.com/users?",
      "method": "GET",
      "timeout": 0,
      "headers": {
        "Cookie": "__cfduid=d6bca52117cba066e36bb96da04bf29bc1610613081"
      },
    };
    
  // $.ajax(users).done(function (response) {
  //   console.log(response);
  //   response.forEach(element => {
  //       const valor = $("#blog").text();
  //       $("#blog").text(valor + element.id + element.name + element.email)

  //   });
  // });


}); 



