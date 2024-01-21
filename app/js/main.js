
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

 $('.reviews__list').slick({
 slidesToShow: 3,
 slidesToScroll: 1,
 arrows: false,
 dots: true,
 appendDots: '.reviews-dots'
 });

 $('.stars').rateYo({
  starWidth: "24px",
  ratedFill: "#EDD146",
  normalFill: "#BEBCBD",
  halfStar: true,
  readOnly: true,
  spacing: "4px",
  starSvg: '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="star_purple500"><path id="Vector" d="M11.9053 16.8835L17.8777 20.4882L16.2928 13.6943L21.5693 9.12325L14.6209 8.53374L11.9053 2.12646L9.18967 8.53374L2.24121 9.12325L7.51779 13.6943L5.93288 20.4882L11.9053 16.8835Z"/></g></svg>'
 });

 $('.product-content__grade-stars').rateYo({
  starWidth: '22px',
  readOnly: true,
  spacing: "10px",
  ratedFill: "#EDD146",
  normalFill: "#BEBCBD",
  halfStar: true,
  numStars: 5,
  starSvg: '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="star_purple500"><path id="Vector" d="M11.9053 16.8835L17.8777 20.4882L16.2928 13.6943L21.5693 9.12325L14.6209 8.53374L11.9053 2.12646L9.18967 8.53374L2.24121 9.12325L7.51779 13.6943L5.93288 20.4882L11.9053 16.8835Z"/></g></svg>'
 });

 $('.footer__slide-toggle').on('click', function(){
  $('.footer__categories-list').slideToggle('slow', function(){

  });
 });

 $('.filter-price__input').ionRangeSlider({
  type: "double",
  prefix: '$',

  onStart: function (data) {
    $('.filter-price__from').text(data.from)
    $('.filter-price__to').text(data.to)
  },

  onChange: function (data) {
    $('.filter-price__from').text(data.from)
    $('.filter-price__to').text(data.to)
  },

 });
 

 $('.filters__name1').on('click', function(){
 $('.filters__item1').slideToggle()
 $('filters__item1').css('display', 'block')
 });

 $('.filters__name2').on('click', function(){
 $('.filters__item2').slideToggle()
 $('filters__item2').css('display', 'block')
 });

 $('.filters__name3').on('click', function(){
 $('.filters__item3').slideToggle()
 $('filters__item3').css('display', 'block')
 });

 $('.filters__name4').on('click', function(){
 $('.filters__item4').slideToggle()
 $('filters__item4').css('display', 'block')
 });

 $('.filters__name5').on('click', function(){
  $('.filters__item5').slideToggle()
   $('filters__item5').css('display', 'block')
  });

  $('.filters__name').on('click', function(){
    $(this).toggleClass('filters__name--active')
  })

  $('.product-slide__thumb').slick({
   asNavFor: '.product-slide__big',
   focusOnSelect: true,
   slidesToShow: 3,
   slidesToScroll: 1,
   vertical: true,
   draggable: false,
  });

  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    draggable: false,
    fade: true,
    cssEase: 'linear',
    arrows: true,
    appendArrows: '.product-slide__arrows',
    nextArrow: '<button type="button" class="slick-next"><svg><use xlink:href="images/sprite.svg#product-slide-arrow"></use></svg></button>',
    prevArrow: '<button type="button" class="slick-prev"><svg><use xlink:href="images/sprite.svg#product-slide-arrow"></use></svg></button>'
  });


});


const footerE = document.getElementById('footer__categories');

footerE.onclick = function() {
  footerE.classList.toggle('footer__categories--active')
}











