$(document).ready(function () {
  // let _gnb = $('.gnb>ul');

  // _gnb.find('li ul').hide();

  // _gnb.find('>li>a').on('mouseenter focus', function() {
  //     _gnb.find('li.on').removeClass('on').children('ul').hide();
  //     $(this).next().show().parent().addClass('on');
  //     $('.header').addClass('active');
  // });

  // _gnb.on('mouseleave', function() {
  //     $(this).find('>li.on').removeClass('on').children('ul').hide();
  //     $('.header').removeClass('active');
  // })

  // _gnb.find('a:first,a:last').on('blur', function() {
  //     setTimeout(function() {
  //         if (!$('_gnb a').is(':focus')) {
  //             _gnb.trigger('mouseleave');
  //         }
  //     }, 10);
  // });

  // 메인 메뉴 A 태그
  let mainmenuA = $(".mainmenu a");
  let submenuWrapBg = $(".submenu-wrap-bg ");
  let submenuWrap = $(".submenu-wrap");
  let submenuBox = $(".sub-menu-box");
  let submenuHideTimer;
  let submuHideDelay = 300;

  //  주 메뉴에서 마우스 오버 처리
  $.each(mainmenuA, function (index, item) {
    // 각 주메뉴 마우스 오버시 처리
    $(this).mouseenter(function () {
      // 사라지는 타이머 삭제
      clearTimeout(submenuHideTimer);

      // 서브메뉴 전체 배경에 높이값 0 ==> 300으로 변경
      submenuWrapBg.addClass("submenu-wrap-bg-active");

      // 서브메뉴 내용 영역에 높이값 0 ==> 300으로 변경
      // 서브메뉴 내용 영역 overflow:hidden 이므로
      // 높이만큼 내용이 보입니다.
      // 높이가 변하면서 내용영역이 늘어나면서 보인다.
      submenuWrap.addClass("submenu-wrap-active");

      // 실제 서브메뉴들을 숨긴다.
      submenuBox.hide();
      // 한개의 서브메뉴를 보여준다.
      submenuBox.eq(index).show();
    });

    // 주메뉴에서 마우스 아웃시 처리
    $(this).mouseleave(function () {
      // 타이머로 조금 있다(let submuHideDelay = 300)가
      // 원래 높이값 즉, 0 으로 height 를 셋팅한다.
      clearTimeout(submenuHideTimer);

      // 0.3초 후 removeSubmenu 함수를 실행
      submenuHideTimer = setTimeout(removeSubmenu, submuHideDelay);
    });
  });

  // 메뉴가 사라지는 함수
  function removeSubmenu() {
    // 원래 높이값 즉, 0 으로 height 를 셋팅한다.
    submenuWrapBg.removeClass("submenu-wrap-bg-active");
    submenuWrap.removeClass("submenu-wrap-active");
  }
  // 배경에 마우스 오버시 타이머 삭제
  submenuWrapBg.mouseenter(function () {
    clearTimeout(submenuHideTimer);
  });
  // 배경에 마우스 아웃시 타이머 생성
  submenuWrapBg.mouseleave(function () {
    clearTimeout(submenuHideTimer);
    // 0.3초 후 removeSubmenu 함수를 실행
    submenuHideTimer = setTimeout(removeSubmenu, submuHideDelay);
  });

  // 서브 메뉴 내용들 마우스 오버시 타이머 삭제
  submenuWrap.mouseenter(function () {
    clearTimeout(submenuHideTimer);
  });
  // 서브 메뉴 내용들 마우스 아웃시 타이머 생성
  submenuWrap.mouseleave(function () {
    clearTimeout(submenuHideTimer);
    submenuHideTimer = setTimeout(removeSubmenu, submuHideDelay);
  });
});

window.onload = function () {
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
    navigation: {
      prevEl: ".sw-visual-prev",
      nextEl: ".sw-visual-next",
    },
  });
};
