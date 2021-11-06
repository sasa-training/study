$(function() {
  // ナビ 
  $(".toggle_btn").click(function() {
    $(this).toggleClass("open_toggle");
    if ($(this).hasClass("open_toggle")) {
      $("nav").addClass("open_toggle");
    } else {
      $("nav").removeClass("open_toggle");
    } 
  });
  // リロード時
  // ウィンドウサイズ768px以下の場合、クラスを削除
  if (window.matchMedia( "(max-width: 700px)" ).matches) {
    $(function(){
      $("nav").removeClass("open_toggle");
      $("button").removeClass("open_toggle");
    });
  };
  // リサイズ時
  $(window).resize(function(){
    let $windowWidth = $(window).width();
    let $breakpoints = 700;
    if ($windowWidth > $breakpoints) {
      $("nav").removeClass("open_toggle");
      $("button").removeClass("open_toggle");
    }
  });
  // スライダー
  let mySwiper = new Swiper (".swiper", {
    centeredSlides: true,
    loop: true,
    speed: 1000,
    spaceBetween: 0,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      980: { 
        slidesPerView: 3,
      },
      768: {  
        slidesPerView: 2,
      },
      600: { 
        slidesPerView: 1.5,
      },
      0: { 
        slidesPerView: 1,
      },
    },
  });
});