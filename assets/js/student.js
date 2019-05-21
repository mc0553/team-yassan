
$(function(){
    
    $('.stu1').animate({ left:0 }, 3000 );
    $('.p1').fadeIn(3000);

    $('.stu2').animate({ right:0 }, 3000 );
    // $('.p2').fadeIn(3000);
    $('.p2').fadeIn(3000);

    $(window).scroll(function() {
        //ドキュメントがスクロールされた量を取得する変数を作る
        let scrollTop = $(document).scrollTop();
        if( scrollTop > 80 ){
            $('header').fadeOut(300);
        }else{
            $('header').fadeIn(300);
        }
         
        //CSSのトップの位置を取得する
        let stu3Top =  $('.stu3').offset();
        if( scrollTop > stu3Top.top-400 ){
            $('.stu3').animate({ left:0 }, 2000 );
            $('.p3').fadeIn(2000);
        }

        let stu4Top =  $('.stu4').offset();
        if( scrollTop > stu4Top.top-400 ){
            $('.stu4').animate({ right:0 }, 2000 );
            $('.p4').fadeIn(2000);
        }

        let stu5Top =  $('.stu5').offset();
        if( scrollTop > stu5Top.top-400 ){
            $('.stu5').animate({ left:0 }, 2000 );
            $('.p5').fadeIn(2000);
        }

        let stu6Top =  $('.stu6').offset();
        if( scrollTop > stu6Top.top-400 ){
            $('.stu6').animate({ right:0 }, 2000 );
            $('.p6').fadeIn(2000);
        }

    })



})