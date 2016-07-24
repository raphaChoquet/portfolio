/* global $ */

$(function () {
    Grid.init();
    var delay = 0.6;
    var speed = 1;
    var total = $('.o-anim-fall-1').length;
    $('.o-anim-fall-1').each(function (index) {
        speed = 0.002 * (index * 100 / total);
        $(this).css({
            animationDelay:  (delay + speed) + 's'
        });
        delay += 0.01;
    });
    total = $('.o-anim-fall-2').length;
    delay += 0.4;

    $('.o-anim-fall-2').each(function (index) {
        speed = 0.002 * (index * 100 / total);
        $(this).css({
            animationDelay:  (delay + speed) + 's'
        });
        delay += 0.01;
    });

    $(window).scroll(function () {
        $('.card--hidden').each(function (index) {
            var pos = $(this).offset().top +  $(this).height() / 2;
            if (pos > ($(window).scrollTop() + $(window).height())) {
                return false;
            }
            var $parent = $(this).parent();
            $(this).removeClass('card--hidden');
            setTimeout(function () {
                $parent.removeClass('u-transform3d');
            }, 500);
        });
        var posY = -300 * ($('.banner').offset().top - $(window).scrollTop() / $('.banner').height());
        $('.banner-img').css('background-position-y',  posY);
    });
});
