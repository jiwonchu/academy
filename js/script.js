$(document).ready(function() {

    let _gnb = $('.gnb>ul');

    _gnb.find('li ul').hide();

    _gnb.find('>li>a').on('mouseenter focus', function() {
        _gnb.find('li.on').removeClass('on').children('ul').hide();
        $(this).next().show().parent().addClass('on');
        $('.header').addClass('active');
    });

    _gnb.on('mouseleave', function() {
        $(this).find('>li.on').removeClass('on').children('ul').hide();
        $('.header').removeClass('active');
    })

    _gnb.find('a:first,a:last').on('blur', function() {
        setTimeout(function() {
            if (!$('_gnb a').is(':focus')) {
                _gnb.trigger('mouseleave');
            }
        }, 10);
    });



})



window.onload = function() {
    
    let swiper = new Swiper(".sw-visual", {
        slidesPerView: 1,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".sw-visual-pagination",
            clickable: true,
        },


    });
};