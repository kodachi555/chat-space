$(document).on('turbolinks:load',function(){
  var appendTarget = $(".chat-main__body--messages-list");

  function appendMessage(data){
    var imageUrl = `<img src="${data.image.url}">`;
    if (data.image.url == null){
      var imageUrl = "";
    }
    var html = `<div class="chat-main__message cf">
                  <div class="chat-main__message-name">${data.name}</div>
                  <div class="chat-main__message-time">${data.created_at}</div>
                  <div class="chat-main__message-body">
                    ${data.body}
                    <br>
                    ${imageUrl}
                  </div>
                </div>`

    appendTarget.append(html);
  }

  $('#new_message').on('submit',function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr("action");
    $.ajax({
      type: 'POST',
      url: url,
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(datas){
      appendMessage(datas);
      $(".chat-main__body").animate({scrollTop:appendTarget.height()});
      $("#message_body").val('');
    })
    return false;
  });
});
