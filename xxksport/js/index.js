$(function () {


  

    // 动态设置蒙版高度
    var $clickWrap = $('.click_wrap')
    // var $viewHeight = $(window).height();
    // $clickWrap.css({
    //     height: $viewHeight
    // })
    // 点击导航按钮，显示侧边导航
    var $nav = $('#header nav');
    var $fontNav = $('#header span').first();

    $fontNav.click(function () {
        $nav.animate({
            left: 0
        }, 600)
        $clickWrap.delay(600)
        $clickWrap.animate({
            left: 0
        }, 1)
    })

    /* 再次点击隐藏侧边栏 */
    $clickWrap.click(function () {

        $clickWrap.animate({
            left: -1500
        }, 1)
        $nav.animate({
            left: -200
        }, 600)
    })


})