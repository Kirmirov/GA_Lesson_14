$(document).ready(function() {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close'),
      scrollUp = $('.scroll-up');

  $(modalBtn).click(function(){
    modal.toggleClass('modal--visible');
  });

  $(closeBtn).click(function(){
    modal.toggleClass('modal--visible');
  }); 

  $(document).click(function (e){ 
		if (modal.is(e.target)){ 
      modal.toggleClass('modal--visible'); 
		}
	});

  $(document).keydown(function (evt){
    if (modal.hasClass('modal--visible') && (evt.which == 27)){
      modal.toggleClass('modal--visible');
    }
  })

  $(document).scroll(function() {
    if ($(document).scrollTop() > 500) {
      scrollUp.addClass('scroll-up--show');
    } else {
      scrollUp.removeClass('scroll-up--show');
    }
  });
  
  scrollUp.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });

  const sliderTop = $('.swiper-container');
  const slideBot = $('.swiper-containerbot');

  var mySwiper = new Swiper (sliderTop, {
    loop: true,
    spaceBetween: 15,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var mySwiperBot = new Swiper (slideBot, {
    loop: true,
    slaidersPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: '.pagination-bot',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var btnRight = $('.swiper-button-next');
  var btnLeft = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination-bullets');
  var bullet = $('.swiper-pagination-bullet');
  var bulletBot = $('.bot');
  var btnBotR = $('.btnBotR');
  var btnBotL = $('.btnBotL');
  var padBot = $('.pagination-bot');

  bullet.css('margin-right', 16);
  bulletBot.css('margin-right', 20);
  bulletBot.css('bottom', 100);

  bulletBot.css('left', btnLeft.width() + 40);
  btnRight.css('left', btnLeft.width() + 26 + bullets.width() + 13);
  bullets.css('left', btnLeft.width() + 26);
  btnBotR.css('left', btnBotL.width() + 26 + bullets.width()*2 + 13);

  padBot.css('top', 300);
  // Очень страшный кадавр отвечающий за переключенеи фокуса титулов
  var titlesList = $('.slaid-titles__box');
  var index = 1;
  $(document).click(function (e){
    if(index == 6){
      index = 0;
    }
    if(index == -5){
      index = 1;
    }
    if (btnLeft.is(e.target)){
      $(index--);
      var element = titlesList.get(index);
      var elementLast = titlesList.get((index) - 1);
      $(elementLast).addClass('slaid-titles__box--light');
      $(element).removeClass('slaid-titles__box--light');
    }
    if (btnBotR.is(e.target)){ 
      var element = titlesList.get(index);
      var elementLast = titlesList.get((index) - 1);
      $(index++);
      $(element).addClass('slaid-titles__box--light');
      $(elementLast).removeClass('slaid-titles__box--light');
    }
    console.log(index);
	});
});