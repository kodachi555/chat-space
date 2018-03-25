$(function(){

  function appendMessage(data){
    var html = ``
  }


  $('#new_message').on('submit',function(e){
    e.preventDefault();
    console.log("ugoita");
    var input = new FormData(this);
    var action = $(this).attr("action");
    var $url =action +'.json';
    console.log($url);
    $.ajax({
      type: 'POST',
      url: $url,
      data: input,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(datas){
      console.log(datas);
    })
  });
});
