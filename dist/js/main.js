$(function(){window.matchMedia("(min-width: 700px)").matches?$(window).scroll(function(){150<$(window).scrollTop()?$("$element").addClass("$elementClass"):$("$element").removeClass("$elementClass")}):$(window).scroll(function(){$("$element").removeClass("$elementClass")}),$(".toggle_btn").click(function(){$(this).toggleClass("open_toggle"),$(this).hasClass("open_toggle")?$("nav").addClass("open_toggle"):$("nav").removeClass("open_toggle")}),window.matchMedia("(max-width: 700px)").matches&&$(function(){$("nav").removeClass("open_toggle"),$("button").removeClass("open_toggle")}),$(window).resize(function(){700<$(window).width()&&($("nav").removeClass("open_toggle"),$("button").removeClass("open_toggle"))});new Swiper(".swiper",{centeredSlides:!0,loop:!0,speed:1e3,spaceBetween:0,autoplay:{delay:3e3},breakpoints:{980:{slidesPerView:3},768:{slidesPerView:2},600:{slidesPerView:1.5},0:{slidesPerView:1}}})});