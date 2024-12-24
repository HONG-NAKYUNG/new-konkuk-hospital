$(function () {
  // 메인페이지 news 탭버튼
  // 초기화 코드
  $("#section-wrap section").css("display", "none");
  $("#section-wrap section").eq(0).css("display", "block");

  // 탭 클릭 코드
  $("ul.tab-menu li").click(function () {
    var index = $(this).index();
    $("ul.tab-menu li a").removeClass("active");
    $(this).find("a").addClass("active");
    $("#section-wrap section").css("display", "none");
    $("#section-wrap section").eq(index).css("display", "block");
    return false;
  });

  //메인페이지 footer-menu 탭버튼
  $("#section-wrap .tab-list").css("display", "none");
  $("#section-wrap .tab-list").eq(0).css("display", "block");

  $("ul.tab-menu li").click(function () {
    var index = $(this).index();
    $("ul.tab-menu li a").removeClass("active");
    $(this).find("a").addClass("active");
    $("#section-wrap .tab-list").css("display", "none");
    $("#section-wrap .tab-list").eq(index).css("display", "block");
    return false;
  });

  //middle-banner swiper
  var middleBanner = new Swiper(".middle-banner", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  //health swiper
  var healthSlider = new Swiper(".health-banner", {
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: "btn-next",
      prevEl: "btn-prev",
    },
  });

  //list.html 탭버튼
  $("#tabwrap section").css("display", "none");
  $("#tabwrap section").eq(0).css("display", "block");

  $("ul.tab-menu li").click(function () {
    var index = $(this).index();
    $("ul.tab-menu li").removeClass("active");
    $(this).find("a").addClass("active");
    $("#tabwrap section").css("display", "none");
    $("#tabwrap section").eq(index).css("display", "block");
    return false;
  });

  // gnb 드롭다운  
  $("nav > ul > li").mouseenter(function () {
    var thisIndex = $(this).index();
    var headerHeight = $(this).find('.submenu-wrap').data('height');
    $('.submenu-wrap').css('display', 'none');
    $(this).find('.submenu-wrap').css('display', 'block');
    $("#header").css("height", headerHeight);
  });
  $("nav > ul > li").mouseleave(function () {
    $('.submenu-wrap').css('display', 'none');
    $("#header").css("height", "121px");
  });

});
