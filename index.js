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
    $("#card-front").text(words[0].en)
    $("#card-back").text(words[0].ja)

    var i = 0;

    // 次のカードを表示する
    $('#btn').on("click", function () {
      $('#card-back').hide();
      $('#card-front').show();
      i++;
      $('#card-front').text(words[i].en)
      $('#card-back').text(words[i].ja)
    });
    
  // 表のカードから裏のカードに切り替える
  $('#card-front').on("click", function () {
      $('#card-front').hide();
      $('#card-back').show();

    });
  
});