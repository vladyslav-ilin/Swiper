'use strict';

new Swiper('.slider__items', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 3.7,
  spaceBetween: 45,
  loop: true, 
  freeMode: true,
  autoplay: {
    delay: 1500,
    disableOnInteractive: false
  },
  speed: 800,
});