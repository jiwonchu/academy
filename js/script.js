$(document).ready(function () {
  // 안내창 기능

  // // 추가기능 : 스크롤바 없애기
  // $("html").css("overflow", "hidden");

  let modalWrap = $(".modal-wrap");
  let modalClose = $(".modal-close");
  modalClose.click(function () {
    modalWrap.stop().fadeOut(100);
    // 추가기능 : 스크롤바 살리기
    $("html").css("overflow", "auto");
  });

  let modalMain = $(".modal-main");
  // 내용 배경 클릭
  modalMain.click(function (event) {
    // 클릭 정보 전달 막기
    event.stopPropagation();
  });
  // 전체 배경 클릭
  modalWrap.click(function () {
    modalWrap.stop().fadeOut(100);
    // 추가기능 : 스크롤바 살리기
    $("html").css("overflow", "auto");
  });

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

  // 정글 클래스 탭 내용 데이터
  let courseData_0 = [
    {
      img: "course_a.png",
      link: "#",
      subject: "프론트엔드 개발 취업 아카데미<br> - 티라노스쿨 5기",
      desc: "5기(기초+포트폴리오반)<br>09.27 - 01.18 월-목 / 10:00 - 17:00",
      cont: "프론트엔드 개발자로 취업하고자 하는 학생들을 위한 과정으로, 웹/모바일 사이트의 프론트엔드를 설계 개발할 수 있는 능력을 배양하는 취업아카데미입니다.",
    },
    {
      img: "course_b.jpg",
      link: "#",
      subject: "UI/UX 디자이너 취업 아카데미<br>타잔스쿨 10기",
      desc: "10기<br>11.30-02.23 월 - 목 / 10:00 - 17:00",
      cont: "UX/UI 디자이너로 취업을 하고자 하는 학생들의 니즈를 반영한 과정으로 포트폴리오 제작 및 1:1 강사 크리틱, 자기소서와 이력서 첨삭까지 진행되어 취업에만 집중할 수 있는 강의입니다.",
    },
    {
      img: "course_c.png",
      link: "#",
      subject: "라이트브레인 UX/UI 아카데미<br>21기",
      desc: "21기<br>10.24-12.19 월 - 수 / 19:00 - 21:50",
      cont: "UX/UI의 정수, 에이전시 라이트브레인 조성봉 이사 직강으로 , UX/UI Design을 처음 배우거나 이전에 알고 있던 UX/UI 지식에 기반하여 체계적으로 실무 능력을 키우고 UX/UI 포트폴리오를 제작하는 과정입니다.",
    },
    {
      img: "course_d.png",
      link: "#",
      subject: "웹 디자인 & 웹 퍼블리싱 스페셜<br>리스트 23기",
      desc: "23기<br>10.25 - 01.12 월 - 목 / 19:00 - 21:50",
      cont: "웹 디자인을 하는 방법론을 배우고 실제로 디자인을 하는 실무 과정으로, 디자인 포트폴리오를 만들고 퍼블리싱 포트폴리오를 웹에 올려 서비스까지 진행하는, 디자인과 퍼블리싱을 함께 배우는 과정입니다.",
    },
    {
      img: "course_e.png",
      link: "#",
      subject: "웹 퍼블리셔 & UI 개발 프로페셔널<br> 52기",
      desc: "52기<br>10.25 -01.12 화,목 / 19:00-21:50",
      cont: "html, css 기초부터 자바스크립트 및 제이쿼리 기초 및 활용, 반응형 웹, 동적 UI 구현, 최종 포트폴리오 사이트 구성까지.실무 사례를 바탕으로 응용하여 사이트를 제작하는 방법을 배울 수 있는 실무 중심 과정입니다.",
    },
    {
      img: "course_f.png",
      link: "#",
      subject: "UI/UX 디자인 포트폴리오 24기",
      desc: "24기<br>10.27 -12. 20 화, 목 / 19:00 - 21:50",
      cont: "UX/UI 디자인을 위한 UX/UI 필수 기본 이론을 배우고 실무 프로젝트와 동일한 UX/UI 디자인 실습을 진행하며, 디자인 툴 피그마, 제플린을 활용한 UX/UI 디자인 실습 과정입니다.",
    },
    {
      img: "course_g.png",
      link: "#",
      subject:
        "웹 퍼블리싱 실무 워크샵 II : 제이<br>쿼리, 자바스크립트,UI 개발<br> 포트폴리오 46기",
      desc: "46기<br>10.18 -11.24 / 19:00 - 21:50",
      cont: "실무와 실습을 바탕으로 자바스크립트 및 제이쿼리 기초 및 활용, 반응형 웹, 동적 UI구현, 최종 포트폴리오 사이트 구성까지, 체계적인 훈련을 통해 인터랙션 포트폴리오 구현을 위한 실질적 핵심 스킬을 습득할 수 있습니다.",
    },
    {
      img: "course_h.png",
      link: "#",
      subject: "Figma,Zeplin,ProtoPie 실무 <br>워크샵 18기",
      desc: "18기<br>10.19-11.02 월,수/19:00-21:50",
      cont: "UI/UX 디자인의 최적화 툴인 피그마 사용법, 개발자와의 소통을 위한 제플린, 인터랙션 구현을 위한 프로토파이까지.에이전시 '인픽스' 그룹장 안명철 강사님께 배울 수 있는,실무에 최적화된 실무 워크샵입니다.",
    },
    {
      img: "course_j.jpg",
      link: "#",
      subject: "웹 퍼블리싱 실무 워크샵 I : HTML,<br>CSS,반응협 웹 (74기)",
      desc: "74기<br>10.25 -12.01 화,목 / 19:00 -21:50",
      cont: "웹 퍼블리싱 기초부터 실무까지 학습하며, html과 css기초를 탄탄히 쌓아 실무 소스를 그대로 분석하고 자신의 것으로 소화하여 실무 프로젝트를 진행할 수 있는 기본을 배워 반응형 웹을 제작하는 과정입니다.",
    },
    {
      img: "course_k.jpg",
      link: "#",
      subject: "웹 디자인 포트폴리오 23기",
      desc: " 23기<br>10.26 -12.05 월,수 / 19:00 -21:50",
      cont: "웹 디자인을 하는 방법론을 배우고 실제로 디자인을 하는 실무 과정으로, 프로젝트 overview를 토대로 아이데이션, 컨셉 도출 및프로토타입 제작을 통해 웹 디자인을 배우는 과정입니다.",
    },
    {
      img: "course_l.jpg",
      link: "#",
      subject: "웹 서비스 기획 실무",
      desc: "1기<br>11.09 -12.05 월,수 / 19:00 -21:50",
      cont: "에이전시 13년 경력의 실무 기획자 출신 강사가 진행하는 과정으로, 웹과 앱의 구축 프로젝트를 이해하고 기획서를 작성하며 기획자들이 실제 프로젝트에서 사용하는 기획 팁, 준비해야 하는 업무 등을 실습을 통해 습득할 수 있습니다.",
    },
    {
      img: "course_m.png",
      link: "#",
      subject: "캐릭터 디자인 아카데미 49기",
      desc: " 강의 준비중입니다",
      cont: "이모티콘, 게임, 웹툰, 애니, 아트 토이, 굿즈, 전시 참여를 위한 오리지널 캐릭터를 개발하고 저작권 등록 및 론칭을 할 수 있는, 2잡러를 위한 캐릭터 실무 및 작가 활동을 위한 오리지널 캐릭터 제작 과정입니다.",
    },
    {
      img: "course_o.jpg",
      link: "#",
      subject: "일러스트레이터 실무 활용 : Vector<br> ShapeMaking(18기)",
      desc: "강의 준비중입니다",
      cont: "디자이너를 위한 일러스트레이터 활용 과정으로, 기본 기능들을 다양하게 실험적으로 접근하고 실험을 통한 경험의 축적을 통해 일러스트레이터를 효율적으로 활용하여 실무 스킬을 향상시킬 수 있습니다.",
    },
    {
      img: "course_p.png",
      link: "#",
      subject: "포토샵 실무활용:Media Image <br>Making(68기)",
      desc: "강의 준비중입니다",
      cont: "단순하게 적용했던 포토샵 기능들을 다양하게 실험적으로 접근하고 실험을 통한 경험의 축적을 통해 포토샵 스킬을 무한하게 확장하고 활용하여 능수능란하게 포토샵 실무 스킬을 향상시킬 수 있습니다.",
    },
    {
      img: "course_q.png",
      link: "#",
      subject: "아이소메트릭 조형 일러스트 포트<br>폴리오 워크샵 4기",
      desc: "강의 준비중입니다",
      cont: "아이소메트릭 원리를 이해하고, 효율적이고 직관적인 작업 접근법을 익혀 일러스트레이터를 이용해 등각투상 일러스트 포트폴리오를 제작하는 과정으로, 그래픽 작품을 만들고 취업 사례를 보며 포트폴리오에 담아냅니다.",
    },
  ];
  let courseData_1 = [
    {
      img: "course_b.jpg",
      link: "#",
      subject: "UI/UX 디자이너 취업 아카데미<br>타잔스쿨 10기",
      desc: "10기<br>11.30-02.23 월 - 목 / 10:00 - 17:00",
      cont: "",
    },
    {
      img: "course_d.png",
      link: "#",
      subject: "웹 디자인 & 웹 퍼블리싱 스페셜<br>리스트 23기",
      desc: "23기<br>10.25 - 01.12 월 - 목 / 19:00 - 21:50",
      cont: "",
    },
    {
      img: "course_f.png",
      link: "#",
      subject: "UI/UX 디자인 포트폴리오 24기",
      desc: "24기<br>10.27 -12. 20 화, 목 / 19:00 - 21:50",
      cont: "",
    },
    {
      img: "course_k.jpg",
      link: "#",
      subject: "웹 디자인 포트폴리오 23기",
      desc: " 23기<br>10.26 -12.05 월,수 / 19:00 -21:50",
      cont: "",
    },
  ];
  let courseData_2 = [
    {
      img: "course_a.png",
      link: "#",
      subject: "프론트엔드 개발 취업 아카데미<br> - 티라노스쿨 5기",
      desc: "5기(기초+포트폴리오반)<br>09.27 - 01.18 월-목 / 10:00 - 17:00",
      cont: "",
    },
    {
      img: "course_d.png",
      link: "#",
      subject: "웹 디자인 & 웹 퍼블리싱 스페셜<br>리스트 23기",
      desc: "23기<br>10.25 - 01.12 월 - 목 / 19:00 - 21:50",
      cont: "",
    },
    {
      img: "course_e.png",
      link: "#",
      subject: "웹 퍼블리셔 & UI 개발 프로페셔널<br> 52기",
      desc: "52기<br>10.25 -01.12 화,목 / 19:00-21:50",
      cont: "",
    },
    {
      img: "course_j.jpg",
      link: "#",
      subject: "웹 퍼블리싱 실무 워크샵 I : HTML,<br>CSS,반응협 웹 (74기)",
      desc: "74기<br>10.25 -12.01 화,목 / 19:00 -21:50",
      cont: "",
    },
    {
      img: "course_g.png",
      link: "#",
      subject:
        "웹 퍼블리싱 실무 워크샵 II : 제이<br>쿼리, 자바스크립트,UI 개발<br> 포트폴리오 46기",
      desc: "46기<br>10.18 -11.24 / 19:00 - 21:50",
      cont: "",
    },
  ];
  let courseData_3 = [
    {
      img: "course_c.png",
      link: "#",
      subject: "라이트브레인 UX/UI 아카데미<br>21기",
      desc: "21기<br>10.24-12.19 월 - 수 / 19:00 - 21:50",
      cont: "",
    },
  ];
  let courseData_4 = [
    {
      img: "course_l.jpg",
      link: "#",
      subject: "웹 서비스 기획 실무",
      desc: "1기<br>11.09 -12.05 월,수 / 19:00 -21:50",
      cont: "",
    },
  ];
  let courseData_5 = [
    {
      img: "course_h.png",
      link: "#",
      subject: "Figma,Zeplin,ProtoPie 실무 <br>워크샵 19기",
      desc: "18기<br>10.19-11.02 월,수/19:00-21:50",
      cont: "",
    },
    {
      img: "course_o.jpg",
      link: "#",
      subject: "일러스트레이터 실무 활용 : Vector<br> ShapeMaking(18기)",
      desc: "강의 준비중입니다",
      cont: "",
    },
    {
      img: "course_p.png",
      link: "#",
      subject: "포토샵 실무활용:Media Image <br>Making(68기)",
      desc: "강의 준비중입니다",
      cont: "",
    },
    {
      img: "course_q.png",
      link: "#",
      subject: "아이소메트릭 조형 일러스트 포트<br>폴리오 워크샵 4기",
      desc: "강의 준비중입니다",
      cont: "",
    },
  ];
  let courseData_6 = [
    {
      img: "course_m.png",
      link: "#",
      subject: "캐릭터 디자인 아카데미 49기",
      desc: " 강의 준비중입니다",
      cont: "",
    },
  ];

  //  전체 데이터 모음
  let courseData = [
    courseData_0,
    courseData_1,
    courseData_2,
    courseData_3,
    courseData_4,
    courseData_5,
    courseData_6,
  ];

  // 정글 클래스 탭 메뉴 관련
  let courseTab = $(".course-tab a");
  let courseTabLi = $(".course-tab li");
  $.each(courseTab, function (index, item) {
    $(this).click(function (e) {
      // href 막기
      e.preventDefault();
      // css 추가하기
      courseTabLi.removeClass("on");
      courseTabLi.eq(index).addClass("on");
      tabChange(index);
    });
  });

  //탭메뉴 선택시 실행할 함수
  // 내용배치장소
  let courseContent = $(".course-content");
  let courseContentHtml = "";
  tabChange(0);

  function tabChange(_index) {
    // 초기화
    courseContentHtml = "";
    // 선택된 데이터
    let nowData = courseData[_index];
    for (let i = 0; i < nowData.length; i++) {
      courseContentHtml += `
      <li>
        <a href="${nowData[i].link}">
          <div>
            <img src="images/${nowData[i].img}" class="only_pc" alt="${nowData[i].subject}">
            <div class="tab-box">
              <strong>${nowData[i].subject}</strong>
              <p>${nowData[i].cont}</p>
              <span>자세히 보기</span>
            </div>
          </div> 
          <div class="text-area">
              <em>${nowData[i].subject}</em>
              <span>${nowData[i].desc}</span>
          </div>
        </a> 
        
      </li>`;
    }
    courseContent.html(courseContentHtml);
  }

  // 포트폴리오 관련
  // 포트폴리오클래스 탭 내용 데이터
  let portData_0 = [
    {
      img: "pt-toy.jpg",
      link: "#",
      subject: "토이저러스 리브랜딩",
      desc: "장민진",
    },
    {
      img: "pt-kid.jpg",
      link: "#",
      subject: "Kidoc",
      desc: "윤지수",
    },
    {
      img: "pt-nex.jpg",
      link: "#",
      subject: "넷플릭스 월드",
      desc: "김보민",
    },
    {
      img: "pt-pam.jpg",
      link: "#",
      subject: "FAMP",
      desc: "이채림",
    },
    {
      img: "pt-pl.jpg",
      link: "#",
      subject: "Plity",
      desc: "전다혜",
    },
    {
      img: "pt-dt.jpg",
      link: "#",
      subject: "데이트팝",
      desc: "김동준",
    },
    {
      img: "pt-pc.jpg",
      link: "#",
      subject: "따릉이",
      desc: "최혜인",
    },
    {
      img: "pt-sp.jpg",
      link: "#",
      subject: "Sprint",
      desc: "임수현",
    },
  ];

  let portData_1 = [
    {
      img: "pt-om.jpg",
      link: "#",
      subject: "오메가 문워치",
      desc: "이채림",
    },
    {
      img: "pt-bp.jpg",
      link: "#",
      subject: "바프",
      desc: "최지영",
    },
    {
      img: "pt-re.jpg",
      link: "#",
      subject: "VACHERON CONSTANTIN",
      desc: "유세영",
    },
    {
      img: "pt-xb.jpg",
      link: "#",
      subject: "XBOX SERIES X",
      desc: "백철훈",
    },
    {
      img: "pt-sb.jpg",
      link: "#",
      subject: "삼립호빵",
      desc: "김현주 ",
    },
    {
      img: "pt-ni.jpg",
      link: "#",
      subject: "나이키 풋볼 데이브레이크 팩 ",
      desc: "정성엽",
    },
    {
      img: "pt-sm.jpg",
      link: "#",
      subject: "모나미 스마트펜",
      desc: "이선희",
    },
    {
      img: "pt-fr.jpg",
      link: "#",
      subject: "G-SHOCK FROGMAN",
      desc: "신혜령",
    },
  ];

  let portData_2 = [
    {
      img: "pt-ba.jpg",
      link: "#",
      subject: "뱅크샐러드",
      desc: "노윤,송혜정,양찬송,이정근,정정은",
    },
    {
      img: "pt-na.jpg",
      link: "#",
      subject: "네이버쇼핑",
      desc: "김민지,홍혜림,조혜정,이지현,고은혜",
    },
    {
      img: "pt-lo.jpg",
      link: "#",
      subject: "롯데온",
      desc: "고수진,고수현,김수민,이수진,조혜민",
    },
    {
      img: "pt-rt.jpg",
      link: "#",
      subject: "마이리얼트립",
      desc: "라경연,서민지,유도이,이다솜,정혜윤,진유빈",
    },
    {
      img: "pt-sw.jpg",
      link: "#",
      subject: "서브웨이",
      desc: "박소희,정현지,정혜선",
    },
    {
      img: "pt-ku.jpg",
      link: "#",
      subject: "마켓컬리",
      desc: "김지영,박나영,박정은,조유진",
    },
    {
      img: "pt-ka.jpg",
      link: "#",
      subject: "카카오톡 선물하기",
      desc: "김민정,김경희,이현주,이주은,남윤지",
    },
    {
      img: "pt-cl.jpg",
      link: "#",
      subject: "클럽하우스",
      desc: "양사랑,조예린,김예원,박수아,김지현",
    },
  ];

  let portData_3 = [
    {
      img: "pt-pe.jpg",
      link: "#",
      subject: "이마트 피코크",
      desc: "박수진",
    },
    {
      img: "pt-sme.jpg",
      link: "#",
      subject: "네이버 SME 광고 캠페인",
      desc: "구종서",
    },
    {
      img: "pt-lx.jpg",
      link: "#",
      subject: "한국국토정보공사",
      desc: "한창희",
    },
    {
      img: "pt-ab.jpg",
      link: "#",
      subject: "Andrage",
      desc: "심기은",
    },
    {
      img: "pt-ac.jpg",
      link: "#",
      subject: "인트로",
      desc: "심기은",
    },
    {
      img: "pt-ad.jpg",
      link: "#",
      subject: "intro",
      desc: "송승현",
    },
    {
      img: "pt-ae.jpg",
      link: "#",
      subject: "인트로",
      desc: "모소현",
    },
    {
      img: "pt-af.jpg",
      link: "#",
      subject: "intro",
      desc: "김수현",
    },
  ];

  let portData_4 = [
    {
      img: "pt-ca.jpg",
      link: "#",
      subject: "CANTOMIX",
      desc: "문효승",
    },
    {
      img: "pt-dd.jpg",
      link: "#",
      subject: "DalDal Best Friends",
      desc: "이연희",
    },
    {
      img: "pt-he.jpg",
      link: "#",
      subject: "Hi,Ego",
      desc: "권혁진",
    },
    {
      img: "pt-mm.jpg",
      link: "#",
      subject: "모야몽실",
      desc: "박성은",
    },
    {
      img: "pt-ct.jpg",
      link: "#",
      subject: "코라팅고",
      desc: "최지예",
    },
    {
      img: "pt-zz.jpg",
      link: "#",
      subject: "찐",
      desc: "어진이",
    },
    {
      img: "pt-pp.jpg",
      link: "#",
      subject: "포르포르",
      desc: "장찬주",
    },
    {
      img: "pt-rr.jpg",
      link: "#",
      subject: "글로위스 로로",
      desc: "박선",
    },
  ];

  //  전체 데이터 모음
  let portData = [portData_0, portData_1, portData_2, portData_3, portData_4];
  // 포트폴리오 클래스 탭 메뉴 관련
  let portTab = $(".port-tab a");
  let portTabLi = $(".port-tab > li");
  $.each(portTab, function (index, item) {
    $(this).click(function (e) {
      // href 막기
      e.preventDefault();
      // css 추가하기
      portTabLi.removeClass("on");
      portTabLi.eq(index).addClass("on");
      porttabChange(index);
    });
  });

  //탭메뉴 선택시 실행할 함수
  // 내용배치장소
  let portcontent = $(".port-content");
  let portcontentHtml = "";
  porttabChange(0);

  function porttabChange(_index) {
    // 초기화
    portcontentHtml = "";
    // 선택된 데이터
    let nowData = portData[_index];
    for (let i = 0; i < nowData.length; i++) {
      portcontentHtml += `
      <li>
        <a href="${nowData[i].link}">
          <img src="images/${nowData[i].img}">          
          <div>
            <p>
                <em>${nowData[i].subject}</em>
                <span>${nowData[i].desc}</span>
              </p>
          </div>      
        </a>         
      </li>`;
    }
    portcontent.html(portcontentHtml);
  }

  // -------------
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
  $(".gitple-close").click(function (e) {
    e.preventDefault();
    $(".gitple-wrap").hide();
  });
};
