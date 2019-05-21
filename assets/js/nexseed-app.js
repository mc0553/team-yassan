$(function(){

    jQuery(function($) {
        $('.slides').slick({
        //ここにオプションを指定できる
        autoplay: true,
        arrows: false,
        speed: 5000,
        slidesToShow: 1,
        });
    })


    $('.pct').click(function(){

        // $('.container').append($('<div id="over">'));
    
        $('<div id="over">').appendTo($('.main2')).hide().fadeIn();
    
        $('#over').append($('<div class="img-box">'))
        $('.img-box').append($('<span class="close">&times;</span>'))
        $('.img-box').append($('<img class="lightbox"  width="500px">'))
    
        //クリックされた画像のsrcを取得する
        let imgSrc = $(this).attr('src');
        //作成した<img class="lightbox">のsrcにクリックされた画像のsrcを設定
        $('.lightbox').attr('src', imgSrc);

    
        // .closeがクリックされたら、img-boxを消す
        $('.close').click(function() {
    
          $('.img-box').fadeOut('slow', function() {
          
            $('#over').fadeOut('fast', function() {
          
             $('#over').remove();
    
            })
          })
        })
        // $('#over').prepend('<a href="./sutudent.html"></a>');
    
    })

})