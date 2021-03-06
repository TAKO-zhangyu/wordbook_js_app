$(function() {
  // 単語
  var words = [
    {
      en: 'prevent',
      ja: '防ぐ'
    },
    {
      en: 'humble',
      ja: '謙虚な'
    },
    {
      en: 'vaccine',
      ja: 'ワクチン'
    }
  ]

  // 最初の単語を表示する
    var i = 0;

    $("#card-front").text(words[i].en)
    $("#card-back").text(words[i].ja)

    // 次のカードを表示する
    $('#btn').on("click", function () {
      $('#card-back').hide();
      $('#card-front').show();
      i++;
      
      if (i == words.length) {
        i = 0;
      }
      $('#card-front').text(words[i].en)
      $('#card-back').text(words[i].ja)
    });
    
  // カードの裏表を切り替える
  $('#card').on("click", function () {
      if ($('#card-front').is(":visible")) {
        $('#card-front').hide();
        $('#card-back').show();
      } else { 
        $('#card-back').hide();
        $('#card-front').show();
      }
    });
  
});