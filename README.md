# swiper-carousel-in-carousel

## 動作について

pagenation slider と、main slider 構成です。

pagenation slider メニューの選択は swipe で行います。（prev, next navigation 設置可、 表示数に小数点を使う場合 loop 不可）

pagenation slider メニューを選択すると main slider の表示が切り替わります。

main slider を swipe して動かすことも可能です。

## Swiper の仕様上対応できない点

Swiper.jsの設定でslidesPerViewに小数点を使うと、ループしない場合があります。

これはSwiper.jsの仕様であり、小数点を使用すると正確なスライド数が計算できなくなるためです。
