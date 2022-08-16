window.onload = function() {
    let swiper = new Swiper(".sw-visual", {
        slidesPerView: 1,
        centeredSlides: true,
        loop:true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
            loop: true,
        },
        pagination: {
            el: ".sw-visual-paginaiton",
            clickable: true,
        },


    });
};