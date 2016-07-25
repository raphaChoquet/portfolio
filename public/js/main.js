/* global $ */

$(function () {
    var transitionEventEnd = 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';
    var animationEventEnd ='webkitAnimationEnd mozAnimationEnd oAnimationEnd oanimationend animationend';
    $('html,body').css('overflow', 'hidden');
    Grid.init();

    var nbrAnim = 3;
    var animFinish = 0;
    $('.banner').on(animationEventEnd, function () {
        animFinish++;
        if (nbrAnim !== animFinish) {
            return;
        }
        $('html,body').css('overflow', 'auto');
        $('.cta-scroll').addClass('show');
        $('.banner').click(function () {
            var scrollVal = $('#projects').offset().top - $('.navbar').outerHeight();
            $('html,body').animate({
                scrollTop: scrollVal
            }, 500);
        });
    });

    $(window).scroll(function () {
        var hWindow = $(window).height();
        if (!$('.navbar').hasClass('show')) {
            $('.navbar').addClass('show');
        }

        $('.title-section--hidden').each(function () {
            var $elmt = $(this);
            var pos = $elmt.offset().top + $elmt.outerHeight(true);
            if (pos > ($(window).scrollTop() + hWindow)) {
                return;
            }
            $elmt.removeClass('title-section--hidden');
        });
        $('.card--hidden').each(function () {
            var pos = $(this).offset().top +  $(this).height() / 2;
            if (pos > ($(window).scrollTop() + hWindow)) {
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

        if ($('.block-text-hidden').length > 0) {
            var pos = $('.block-text-hidden').offset().top + $('.block-text-hidden').outerHeight(true) / 2;
            if (pos <= ($(window).scrollTop() + hWindow)) {
                $('.block-text-hidden').removeClass('block-text-hidden');
            }
        }
    });

    $('.navbar-nav a').click(function (e) {
        e.preventDefault();
        var id = $(this).attr('href');
        var scrollVal = $(id).offset().top - $('.navbar').outerHeight();
        $('html, body').animate({
            scrollTop: scrollVal
        }, 350);
    });
});
