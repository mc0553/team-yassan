$(window).scroll(function() {
    //ドキュメントがスクロールされた量を取得する変数を作る
    let scrollTop = $(document).scrollTop();
    if( scrollTop > 80 ){
        $('header').fadeOut(300);
    }else{
        $('header').fadeIn(300);
    }
     
    
})