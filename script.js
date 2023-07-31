const setNavVisibility = () => {
    {
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
}
window.addEventListener('load', setNavVisibility);
window.addEventListener('resize', setNavVisibility);

const swiperNav = new Swiper('.swiper-nav', {
  slidesPerView: "auto",
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  spaceBetween: 16,
  breakpoints: {
    768: {
      navigation: {
        nextEl: '.swiper-button-next--nav',
        prevEl: '.swiper-button-prev--nav',
      },
    }
  }
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
  spaceBetween: 8,
  navigation: {
    nextEl: '.swiper-button-next--inner',
    prevEl: '.swiper-button-prev--inner',
  },
  nested: true,
  breakpoints: {
    768: {
      slidesPerView: 5,
    }
  }
});

const swiperMain = new Swiper('.swiper-main', {
  loop: true,
  thumbs: {
    swiper: swiperNav
  },
});

swiperMain.on('slideChange', function () {
  // Safari の bug（※） 対策
  // ※ nested を使い、ラッパーのスライドを動かし、戻した時に safari だけ、ネストした swiper の navigation が表示されないことがある。
  // 100ms 後に swiperInner を再描画する
  setTimeout(function () {
    if (swiperInner) {
      swiperInner.update();
      swiperInner.slideTo(0)
    }
  }, 300);
  // swiperNav のスライドを swiperMain のスライドに合わせる
  swiperNav.slideTo(swiperMain.realIndex)
})

