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

  // 単語を取得する
  $("#card-front").text(words[0].en)
  $("#card-back").text(words[0].ja)

  // 次のカードを表示する
  $('#btn').on("click", function () {
    $('#card-front').text(words[1].en)
  });

  // 表のカードから裏のカードに切り替える
  $('#card-front').on("click", function () {
      $('#card-front').hide();
      $('#card-back').show();

    });
  
});