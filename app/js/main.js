$(function(){
 $('.promo__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  infinity: true,
  fade: true,
  cssEase: 'linear',
  appendDots: '.dots-slider',
  nextArrow: '<button type="button" class="slick-next"><svg><use xlink:href="images/sprite.svg#promo-arrow"></use></svg></button>',
  prevArrow: '<button type="button" class="slick-prev"><svg><use xlink:href="images/sprite.svg#promo-arrow"></use></svg></button>'
 });
});
