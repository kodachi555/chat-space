$ function(){

  $().on("keyup",function(){
    var input;
    $.ajax({
      type: 'GET',
      url: '/users/index',
      data: {keyword: input},
      dataType: 'json'
    })
    .done(function(users){

    })
  })
}
