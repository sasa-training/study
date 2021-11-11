$(function() {
  ///ヘッダー追従
  // リロード時
  let element1 = 'header';
  let element2 = $(window);
  let element1Class = 'fixed';

  if (window.matchMedia( "(min-width: 700px)" ).matches) {
    element2.scroll(function () {
      if(element2.scrollTop() > 150) {
        $(element1).addClass(element1Class);
      } else {
        $(element1).removeClass(element1Class);
      }
    });
  }else{
    element2.scroll(function () {
        $(element1).removeClass(element1Class);
    });
  };
  let element3 = 'nav';
  let element4 = 'button';
  let element34Class = 'open_toggle';
  /// ナビ 
  $(".toggle_btn").click(function() {
    $(this).toggleClass(element34Class);
    if ($(this).hasClass(element34Class)) {
      $(element3).addClass(element34Class);
    } else {
      $(element3).removeClass(element34Class);
    } 
  });
  // リロード時
  // ウィンドウサイズ700px以下の場合、クラスを削除
  if (window.matchMedia( "(max-width: 700px)" ).matches) {
    $(function(){
      $(element3).removeClass(element34Class);
      $(element4).removeClass(element34Class);
    });
  };
  // リサイズ時
  $(window).resize(function(){
    let $windowWidth = $(window).width();
    let $breakpoints = 700;
    if ($windowWidth > $breakpoints) {
      $(element3).removeClass(element34Class);
      $(element4).removeClass(element34Class);
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