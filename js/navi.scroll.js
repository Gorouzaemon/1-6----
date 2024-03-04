
$('#page-link a[href*="#"]').click(function () {//全てのページ内リンクに適用させたい場合はa[href*="#"]のみでもOK
	var hash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
	var pos = $(hash).offset().top;	//idの上部の距離を取得
	$('body,html').animate( {
        scrollTop: pos
    }, 500); 
	return false;
});
// hrefの横の*はなぜつけるのでしょうか。