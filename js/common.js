    // ------------------------------------------------------
    // スライド
    // ------------------------------------------------------
    $(function() {
        // 設定
        // var $width = 100%; // 横幅
        // var $height = 100%; // 高さ
        var $interval = 3000; // 切り替わりの間隔（ミリ秒）
        var $fade_speed = 1000; // フェード処理の早さ（ミリ秒）
        $("#slide ul li").css({ "position": "relative", "overflow": "hidden" });
        $("#slide ul li").hide().css({ "position": "absolute", "top": 0, "left": 0 });
        $("#slide ul li:first").addClass("active").show();
        setInterval(function() {
            var $active = $("#slide ul li.active");
            var $next = $active.next("li").length ? $active.next("li") : $("#slide ul li:first");
            $active.fadeOut($fade_speed).removeClass("active");
            $next.fadeIn($fade_speed).addClass("active");
        }, $interval);
    });
    // ------------------------------------------------------
    // 画像切替
    // ------------------------------------------------------

    // <!--
    function myChgPic(myPicURL) {
        document.images["myBigImage"].src = myPicURL;
    }
    // -->

    // $('.parallax-window').parallax({imageSrc: 'images/back.jpg'});

    // ------------------------------------------------------
    //戻るボタン
    // ------------------------------------------------------

    $(function() {
        var pagetop = $('#page_top');
        pagetop.hide();
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) { //100pxスクロールしたら表示
                pagetop.fadeIn();
            } else {
                pagetop.fadeOut();
            }
        });
        pagetop.click(function() {
            $('body,html').animate({
                scrollTop: 0
            }, 500); //0.5秒かけてトップへ移動
            return false;
        });
    });



    $(function() {
        $(window).scroll(function() {
            var scroll = $(this).scrollTop(); // スクロール値を取得
            $('#scroll_img').css('background-position', '10px ' + parseInt(-scroll / 50) + 'px'); // 1/50のスピード
        });
    });
    // ------------------------------------------------------
    // ヘッダーを固定する関数
    // ------------------------------------------------------
    var nav = $('#top');

    // メニューのtop座標を取得する
    var offsetTop = nav.offset().top;

    var floatMenu = function() {
        // スクロール位置がメニューのtop座標を超えたら固定にする
        if ($(window).scrollTop() > offsetTop) {
            nav.addClass('fixed');
        } else {
            nav.removeClass('fixed');
        }
    }
    $(window).scroll(floatMenu);
    $('body').bind('touchmove', floatMenu);