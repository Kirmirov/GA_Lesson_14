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
    if ($(document).scrollTop() > 300) {
      scrollUp.addClass('scroll-up--show');
    } else {
      scrollUp.removeClass('scroll-up--show');
    }
  });
  
  scrollUp.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });

// Слайдеры
  const sliderTop = $('.swiper-container');
  const slideBot = $('.swiper-containerbot');

  var btnRight = $('.swiper-button-next');
  var btnLeft = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination-bullets');
  var bullet = $('.swiper-pagination-bullet');
  var btnBotR = $('.btnBotR');
  var btnBotL = $('.btnBotL');


  bullet.css('margin-right', 16);
  btnRight.css('left', btnLeft.width() + 26 + bullets.width() + 13);
  bullets.css('left', btnLeft.width() + 26);

  // Очень страшный кадавр отвечающий за переключенеи фокуса титулов в секции 6 шагов
  var titlesList = $('.slaid-titles__box');
  var index = 1;
  $(document).click(function (e){
    if(index == 6){
      index = 0;
    }
    if(index == -5){
      index = 1;
    }
    if (btnBotL.is(e.target)){
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
  });

      $('.hero__title').addClass('arrivalUp');
      $('.hero__text').addClass('arrivalUp');
      $('.hero__button').addClass('arrivalUp');
      $('.hero__button').addClass('arrivalUp');

  var heroScroll_point = $('.hero__scroll-down').offset().top;
  $(window).scroll(function() {
    if($(window).scrollTop() + window.innerHeight > heroScroll_point){
      $('.hero__scroll-down').addClass('rotateLeft');
    }
  });

  var typesSection_point = $('.types__section').offset().top;
  $(window).scroll(function() {
    if($(window).scrollTop() + window.innerHeight > typesSection_point + 900){
      $('#callbtn').addClass('callShake');
    }
  });


  var videoPlay_point = $('.video__play').offset().top;
  var callShake_delay = 100;
  $(window).scroll(function() {
    if($(window).scrollTop() + window.innerHeight > videoPlay_point + callShake_delay){
      $('.video__play').addClass('callShake');
    }
  });

  var cardGroupOne_point = $('#card-up1').offset().top;
  var arrivalLeft_delay = 100;
  $(window).scroll(function() {
    if($(window).scrollTop() + window.innerHeight > cardGroupOne_point + arrivalLeft_delay){
      $('#card-up1').addClass('arrivalLeft');
      $('#card-up2').addClass('arrivalLeft');
      $('#card-up3').addClass('arrivalLeft');
    }
  });

  var cardGroupTwo_point = $('#card-up4').offset().top;
  var arrivalLeft_delay = 300;
  $(window).scroll(function() {
    if($(window).scrollTop() + window.innerHeight > cardGroupTwo_point + arrivalLeft_delay){
      $('#card-up4').addClass('arrivalLeft');
      $('#card-up5').addClass('arrivalLeft');
      $('#card-up6').addClass('arrivalLeft');
    }
  });
// ВАЛИДАТОРЫ
$('#modalF').validate({
  highlight: function(element) {
    $(element).removeClass('input--success');
    $(element).addClass('input--error');
  },
  unhighlight: function(element) {
    $(element).removeClass('input--error');
    $(element).addClass('input--success');
  },
  errorClass: "invalid",
  rules: {
    userNameMF: {
      required: true,
      minlength: 2,
      maxlength: 15
    },
    userPhoneMF: "required",
    userEmailMF: "required"
  },
  errorElement: "div",
    messages: {
      userNameMF: {
        required: "Пожалуйста, укажите Ваше имя",
        minlength: "Пожалуйста, укажите полное имя",
        maxlength: "Имя не должно превышать 15 символов"
      },
      userPhoneMF: "Пожалуйта, укажите контакный номер",
      userEmailMF: {
        required: "Пожалуйста, укажите свой электронный адрес",
        email: "Пожалуйста укажите свой адрес в формате name@domain.com"
      },
    }
});

$('#footerF').validate({
  highlight: function(element) {
    $(element).removeClass('input--success');
    $(element).addClass('input--error');
  },
  unhighlight: function(element) {
    $(element).removeClass('input--error');
    $(element).addClass('input--success');
  },
  errorClass: "invalid",
  rules: {
    userNameFF: {
      required: true,
      minlength: 2,
      maxlength: 15
    },
    userPhoneFF: "required",
    userQuestionFF: "required"
  },
  errorElement: "div",
    messages: {
      userNameFF: {
        required: "Пожалуйста, укажите Ваше имя",
        minlength: "Пожалуйста, укажите полное имя",
        maxlength: "Имя не должно превышать 15 символов"
      },
      userPhoneFF: "Пожалуйта, укажите контакный номер",
      userQuestionFF: "Пожалуйста, заполните это поле",
    }
});

$('#controlF').validate({
  highlight: function(element) {
    $(element).removeClass('input--success');
    $(element).addClass('input--error');
  },
  unhighlight: function(element) {
    $(element).removeClass('input--error');
    $(element).addClass('input--success');
  },
  errorClass: "invalid",
  rules: {
    userNameCF: {
      required: true,
      minlength: 2,
      maxlength: 15
    },
    userPhoneCF: "required"
  },
  errorElement: "div",
    messages: {
      userNameCF: {
        required: "Пожалуйста, укажите Ваше имя",
        minlength: "Пожалуйста, укажите полное имя",
        maxlength: "Имя не должно превышать 15 символов"
      },
      userPhoneCF: "Пожалуйта, укажите контакный номер",
    }
});

  $('[type=tel]').mask("+7(000) 000-00-00", {placeholder: "+7(000) 000-00-00"});

});