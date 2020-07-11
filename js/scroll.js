jQuery(function() {
    jQuery(window).scroll(function(){
        var scroll = $(this).scrollTop(); // スクロール値を取得
        jQuery('#scroll_bg01').css('background-position', '10px ' + parseInt( -scroll / 50 ) + 'px'); // 1/50のスピード
        jQuery('#scroll_bg02').css('background-position', '220px ' + parseInt( -scroll / 10 ) + 'px'); // 1/10のスピード
        jQuery('#scroll_bg03').css('background-position', '440px ' + parseInt( -scroll / 2 ) + 'px'); // 1/2のスピード
        jQuery('#scroll_bg04').css('background-position', parseInt( -scroll / 5 ) + 'px 0' + 'px');
        jQuery('#scroll_bg05').css('background-position', parseInt( scroll / 3 ) + 'px 220' + 'px');

    });
});
