$(function() {
  var words = { 
    prevent: '防ぐ', 
    humble: '謙虚な', 
    vaccine: 'ワクチン' 
  };

  $(function(){
    $.each(words, function(key, value){
        $("#card-front").append(key);
        $("#card-back").append(value);
      })
    });

  $('#card-front').on("click", function () {
      $('#card-front').hide();
      $('#card-back').show();

    });
  
});