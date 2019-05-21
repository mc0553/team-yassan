$(window).scroll(function() {
    //ドキュメントがスクロールされた量を取得する変数を作る
    let scrollTop = $(document).scrollTop();
    if( scrollTop > 80 ){
        $('header').fadeOut(300);
    }else{
        $('header').fadeIn(300);
    }
     
    
})


$(function(){
	var value = 100; 
    var maxNum = 12;
    var minNum = 3;
	var tagInput = $('#jsNum'); // 入力対象のinputタグID名
	var tagOutput = $('#jsPrice'); // 出力対象のinputタグID名
	tagInput.on('change', function() {
		var str = $(this).val();
		var num = Number(str.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
		if(num == 0) {
			num = '';
		} else if (num > maxNum) { 
			num = maxNum;
        } else if (num < minNum) {
            num = minNum;
        }
		$(this).val(num);
		if(num != 0) {
			var price = num * value;
			tagOutput.val(price);
		}
	});
});

$('#timerOlympic').yycountdown({
  endDateTime   : '2019/07/1 00:00:00'
});
