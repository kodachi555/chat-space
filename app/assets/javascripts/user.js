$(document).on('turbolinks:load',function(){

  var targetSearchResult = $("#chat-group-users");

  function appendUserList(user){
    var html = `<div class="chat-group-user clearfix">
                  <div class="chat-group-user__name">${user.name}</div>
                  <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" id="data-user-${user.id}" data-user-id="${user.id}" data-user-name="${user.name}">追加</a>
                </div>`

    targetSearchResult.append(html);
  }

  function appendUser(user_id,user_name){
    var html = `<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-${user_id}'>
                  <input name='group[user_ids][]' type='hidden' value='${user_id}'>
                  <div class='chat-group-user__name'>${user_name}</div>
                  <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
                </div>`

    $("#chat-group-users-selected").append(html);
  }

  function appendNoUser(message){
    var html = `<div class="chat-group-user clearfix">
                  <div class="chat-group-user__name">${message}</div>
                </div>`
    targetSearchResult.append(html);
  }

  $('#user-search-field').on('keyup',function(e){
    e.preventDefault();
    var input = $('#user-search-field').val();
    targetSearchResult.empty();
    if(input !== ""){
      $.ajax({
        type: 'GET',
        url: '/users',
        data: {keyword: input},
        dataType: 'json'
      })
      .done(function(users){
        if (users.length !== 0){
          users.forEach(function(user){
            if ($("#chat-group-user-" + user.id).length == 0){appendUserList(user);}
          });
        }
        else {
          appendNoUser("該当するユーザ名はありません")
        }
      })
      .faile(function(){
        alert('ユーザの検索に失敗しました')
      })
    }
  });

  $(targetSearchResult).on('click','[id^="data-user-"]',function(e){
    e.preventDefault();
    var user_id = $(this).attr("data-user-id");
    var user_name = $(this).attr("data-user-name");
    appendUser(user_id, user_name);
    $(this).parent().remove();
  });

  $("#chat-group-users-selected").on('click','.js-remove-btn',function(e){
    e.preventDefault();
    $(this).parent().remove();
  });

});
