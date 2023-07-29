const swiperThumbnail = new Swiper('.swiper-thumbnail', {

  slidesPerView: 3.5,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  spaceBetween: 16,
  // centeredSlides: true,
  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },


});

const swiperMain = new Swiper('.swiper-main', {
  // Optional parameters
  // direction: 'vertical',
  // loop: true,

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true, // ページネーションをクリック可能にする
  //   dynamicBullets: true // スライドの数だけページネーションを表示する
  // },

  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
  thumbs: {
    swiper: swiperThumbnail
  }


});
const swiperInner = new Swiper('.swiper-inner', {
  // Optional parameters
  // direction: 'vertical',
  slidesPerView: 5,
  loop: true,
  spaceBetween: 8,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  nested: true,

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true, // ページネーションをクリック可能にする
  //   dynamicBullets: true // スライドの数だけページネーションを表示する
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


});
