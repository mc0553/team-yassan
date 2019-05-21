
$(function(){
    
    $('.stu1').animate({ left:20 }, 3000 );
    $('.p1').fadeIn(3000);

    $('.stu2').animate({ right:20 }, 3000 );
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
            $('.stu3').animate({ left:20 }, 2000 );
            $('.p3').fadeIn(2000);
        }

        let stu4Top =  $('.stu4').offset();
        if( scrollTop > stu4Top.top-400 ){
            $('.stu4').animate({ right:20 }, 2000 );
            $('.p4').fadeIn(2000);
        }

        let stu5Top =  $('.stu5').offset();
        if( scrollTop > stu5Top.top-400 ){
            $('.stu5').animate({ left:20 }, 2000 );
            $('.p5').fadeIn(2000);
        }

        let stu6Top =  $('.stu6').offset();
        if( scrollTop > stu6Top.top-400 ){
            $('.stu6').animate({ right:20 }, 2000 );
            $('.p6').fadeIn(2000);
        }

    })

})

// ここからが追加ファイルのＪＳ
let target = document.getElementById('target');
target.addEventListener('dragover', function (e) {
	e.preventDefault();
	e.stopPropagation();
	// e.dataTransfer.dropEffect = 'copy';
	e.dataTransfer.effectAllowed = 'copy';
});

target.addEventListener('drop', function (e) {
	e.stopPropagation();
	e.preventDefault();
	const reader = new FileReader();
	reader.onload = function (e) {
		document.getElementById('preview').src = e.target.result;
	}
	reader.readAsDataURL(e.dataTransfer.files[0]);
});

//追加ボタンのクリック開始
let addBtn =document.getElementById('add');
addBtn.addEventListener('click',function(){

    //入力欄を取得する
    let inputTask = document.getElementById('task');

    //入力欄に文字が設定されているかチェック
    if (　inputTask.value == '' ) {
        //入力値が空かチェック
        //処理を中断
        return;
    }
    //タスクのpタグを作成
    let pText = document.createElement('p');
    //作成したPタグに入力値を設定
    pText.textContent = inputTask.value;

    //追加するDivを取得
    let addFileP = document.getElementById('addFile');
    //追加したDivに作成したPタグを追加
    addFileP.appendChild(pText);

    // 入力欄を空にする
    inputTask.value = '';

    //ここからが画像操作

    //ファイルデータを取得する
    let srcDate = document.getElementById('preview').src;
    //タスクのimgを作成
    let imgPct = document.createElement('img');
    //id名を追加
    
    //作成したimgPctに入力値を設定
    imgPct.src = srcDate;
    console.log(imgPct);

    //追加するDivのIdを取得
    let addFileImg = document.getElementById('addFile');
    //追加したDivに作成したImgを追加
    addFileImg.appendChild(imgPct);

    // プレビュー画像を空にする
    document.getElementById('preview').src = '(../img/kan.jpg)';


    //addFileに挿入するDIVを作成

    let contents = document.createElement('div');
        addFileP.appendChild(contents);
        //クラス名を追加
        contents.classList.add('contents');
            //ボタンを囲むDIVに削除・完了ボタンを追加
            contents.appendChild(pText);
            contents.appendChild(imgPct);
   
    $("html,body").animate({scrollTop:$('.footer').offset().top}, 2000 );

    

})

