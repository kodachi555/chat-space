$(document).on('turbolinks:load',function(){
  var appendTarget = $(".chat-main__body--messages-list");

  function appendMessage(data){
    var imageUrl = (data.image.url !== null) ? `<img src="${data.image.url}">` : "";

    var html = `<div class="chat-main__message cf" data-message-id="${data.id}">
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
    if(formData !== null){
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
        $("#message_image").val('');
      })
    }
    return false;
  });

  // $(function(){
  //   // 5秒ごとにautoUpdateを実行
  //   setInterval(autoUpdate,5000);
  // });

  function autoUpdate(){
    var message_id = $('.chat-main__message:last').attr("data-message-id")
    
    $.ajax({
      type: 'GET',
      url: url,
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
  }
});
