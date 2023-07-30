{
  const setNavVisibility = () => {
    // device width が 768px 未満の場合、.swiper-button-prev--nav と .swiper-button-next--nav を非表示にする
    const swiperButtonPrevNav = document.querySelector('.swiper-button-prev--nav')
    const swiperButtonNextNav = document.querySelector('.swiper-button-next--nav')
    if (window.innerWidth < 768) {
      swiperButtonPrevNav?.classList.add('swiper-button-hidden')
      swiperButtonNextNav?.classList.add('swiper-button-hidden')
    } else {
      swiperButtonPrevNav?.classList.remove('swiper-button-hidden')
      swiperButtonNextNav?.classList.remove('swiper-button-hidden')
    }
  }
  window.addEventListener('load', setNavVisibility);
  window.addEventListener('resize', setNavVisibility);
}

const swiperNav = new Swiper('.swiper-nav', {
  slidesPerView: 3.5,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  spaceBetween: 16,
  breakpoints: {
    768: {
      slidesPerView: 5,
      navigation: {
        nextEl: '.swiper-button-next--nav',
        prevEl: '.swiper-button-prev--nav',
      },
    }
  }
});

const swiperMain = new Swiper('.swiper-main', {
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next--main',
    prevEl: '.swiper-button-prev--main',
  },
  thumbs: {
    swiper: swiperNav
  },
});
{
  // ロード時、リサイズ時にswiper-innerの幅を設定する
  const setWidth = () => {
    const swiperInner = document.querySelector('.swiper-inner')
    const slideWidth = document.querySelector('.swiper-slide--main')?.clientWidth
    if (!slideWidth) {
      return
    }
    swiperInner.style.width = slideWidth - 128 + 'px'
  }
  window.addEventListener('load', setWidth);
  window.addEventListener('resize', setWidth);
}

const swiperInner = new Swiper('.swiper-inner', {
  slidesPerView: 2,
  loop: true,
  spaceBetween: 8,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  nested: true,
  navigation: {
    nextEl: '.swiper-button-next--inner',
    prevEl: '.swiper-button-prev--inner',
  },
  breakpoints: {
    768: {
      slidesPerView: 5,
      navigation: {
        nextEl: '.swiper-button-next--nav',
        prevEl: '.swiper-button-prev--nav',
      },
    }
  }
});
