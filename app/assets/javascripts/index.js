$(function(){

  function appendUser(user){
    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${user.name}</p>
                  <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</a>
                </div>`

    $("#chat-group-users").append(html);
  }

  $('#user-search-field').on('keyup',function(e){
    e.preventDefault();
    var input=$('#user-search-field').val();
    $("#chat-group-users").empty();
    if(input !== null){
      $.ajax({
        type: 'GET',
        url: '/users/index',
        data: {keyword: input},
        dataType: 'json'
      })
      .done(function(users){
        if (users.length !== 0){
          users.forEach(function(user){
            appendUser(user);
          });
        }
      })
    }
  });
});
