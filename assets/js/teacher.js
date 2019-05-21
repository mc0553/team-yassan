$(function(){

    $(".tagline1").letterfx({"fx":"fly-right fly-top spin","timing":100});

    $(window).scroll(function() {
        //ドキュメントがスクロールされた量を取得する変数を作る
        let scrollTop = $(document).scrollTop();
        if( scrollTop > 80 ){
            $('header').fadeOut(300);
        }else{
            $('header').fadeIn(300);
        }
         
        // 2までスクロールされたら
        let scrollTop2 = $('.programming').offset().top;

        if (scrollTop2 > 100) {

            $(".tagline2").letterfx({"fx":"fall","timing":150,"fx_duration":"950ms",});

        } else  {

        }
        let scrollTop3 = $('.english').offset().top;

        if(scrollTop3 > 100){

            $(".tagline3").letterfx({"fx":"fly-right","timing":150,"fx_duration":"950ms",});

        }
        
    });

    let swiper = new Swiper('.swiper-container', {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: true
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
      });
    
});
