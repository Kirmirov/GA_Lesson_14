$(document).ready(function() {
  var modal = $('.bid__modal'),
      modalThanks = $('.thanks'),
      thanksCloseBtn = $('.thanks__close'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close'),
      scrollUp = $('.scroll-up');

// скрипты открытия/закрытия модального окна заявки
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
// скрипты закрытия окна благодарности
  $(thanksCloseBtn).click(function(){
    modalThanks.toggleClass('thanks--visible');
  }); 

  $(document).click(function (e){ 
    if (modalThanks.is(e.target)){ 
      modalThanks.toggleClass('thanks--visible'); 
    }
  });

  $(document).keydown(function (evt){
    if (modalThanks.hasClass('thanks--visible') && (evt.which == 27)){
      modalThanks.toggleClass('thanks--visible');
    }
  })
// скрипты появления скроллера вверх и плавная прокрутка
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
  const sliderTop = $('.swiper-container-top');
  const sliderBot = $('.swiper-container-bot');

  var mySwiperTop = new Swiper (sliderTop, {
    loop: true,
    spaceBetween: 15,
    pagination: {
      el: '.pagination-top',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.btn-top-r',
      prevEl: '.btn-top-l',
    },
  });

  var mySwiperBot = new Swiper (sliderBot, {
    loop: true,
    slideersPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: '.pagination-bot',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.btnBotR',
      prevEl: '.btnBotL',
    },
  });

  var btnLeft = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination-bullets');
  var bullet = $('.swiper-pagination-bullet');
  var btnBotR = $('.btnBotR');
  var btnBotL = $('.btnBotL');

  bullet.css('margin-right', 18);
  bullets.css('left', btnLeft.width() + 26);


  // Очень страшный кадавр отвечающий за переключенеи фокуса титулов в секции 6 шагов
  var titlesList = $('.slide-titles__box');
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
      $(elementLast).addClass('slide-titles__box--light');
      $(element).removeClass('slide-titles__box--light');
    }
    if (btnBotR.is(e.target)){ 
      var element = titlesList.get(index);
      var elementLast = titlesList.get((index) - 1);
      $(index++);
      $(element).addClass('slide-titles__box--light');
      $(elementLast).removeClass('slide-titles__box--light');
    }
  });

  // Анимация кнопки заказть звонок в секции header при достижении секции team
  var typesSection_point = $('.team__section').offset().top;
  $(window).scroll(function() {
    if($(window).scrollTop() + window.innerHeight > typesSection_point + 200){
      $('#callbtn').addClass('callShake');
    }
    if($(window).scrollTop() + window.innerHeight < typesSection_point){
      $('#callbtn').removeClass('callShake');
    }
  });

  var videoPlay_point = $('.video__play').offset().top;
  var callShake_delay = 100;
  $(window).scroll(function() {
    if($(window).scrollTop() + window.innerHeight > videoPlay_point + callShake_delay){
      $('.video__play').addClass('callShake');
    }
  });

// Скрипты для анимации(заменил на анимацию с использованием animate.css и wow.js)
  // $('.hero__title').addClass('arrivalUp');
  // $('.hero__text').addClass('arrivalUp');
  // $('.hero__button').addClass('arrivalUp');
  // $('.hero__button').addClass('arrivalUp');

  // var heroScroll_point = $('.hero__scroll-down').offset().top;
  // $(window).scroll(function() {
  //   if($(window).scrollTop() + window.innerHeight > heroScroll_point){
  //     $('.hero__scroll-down').addClass('rotateLeft');
  //   }
  // });

  // var cardGroupOne_point = $('#card-up1').offset().top;
  // var arrivalLeft_delay = 100;
  // $(window).scroll(function() {
  //   if($(window).scrollTop() + window.innerHeight > cardGroupOne_point + arrivalLeft_delay){
  //     $('#card-up1').addClass('arrivalLeft');
  //     $('#card-up2').addClass('arrivalLeft');
  //     $('#card-up3').addClass('arrivalLeft');
  //   }
  // });

  // var cardGroupTwo_point = $('#card-up4').offset().top;
  // var arrivalLeft_delay = 300;
  // $(window).scroll(function() {
  //   if($(window).scrollTop() + window.innerHeight > cardGroupTwo_point + arrivalLeft_delay){
  //     $('#card-up4').addClass('arrivalLeft');
  //     $('#card-up5').addClass('arrivalLeft');
  //     $('#card-up6').addClass('arrivalLeft');
  //   }
  // });
  
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
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "sendMF.php",
        data: $(form).serialize(),
        success: function (response) {
          $(form)[0].reset();
          modal.removeClass('modal--visible');
          modalThanks.toggleClass('thanks--visible');
        }
      });
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
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "sendFF.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log('Ответ сервера:' + response);
          $(form)[0].reset();
          modalThanks.toggleClass('thanks--visible');
        }
      });
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
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "sendCF.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log('Ответ сервера:' + response);
          $(form)[0].reset();
          modalThanks.toggleClass('thanks--visible');
        }
      });
    }
  });
  $('#frozeFFr').validate({
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
      userNameFFr: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhoneFFr: "required",
      userEmailFFr: "required"
    },
    errorElement: "div",
    messages: {
      userNameFFr: {
        required: "Пожалуйста, укажите Ваше имя",
        minlength: "Пожалуйста, укажите полное имя",
        maxlength: "Имя не должно превышать 15 символов"
      },
      userPhoneFFr: "Пожалуйта, укажите контакный номер",
      userEmailFFr: {
        required: "Пожалуйста, укажите свой электронный адрес",
        email: "Пожалуйста укажите свой адрес в формате name@domain.com"
      },
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "sendFFr.php",
        data: $(form).serialize(),
        success: function (response) {
          $(form)[0].reset();
          modalThanks.toggleClass('thanks--visible');
        }
      });
    }
  });

  $('[type=tel]').mask("+7(000) 000-00-00", {placeholder: "+7(000) 000-00-00"});

  // скрипты для вкладок секции fantasy
  $(function () {
    $('#nav-tab a').tab('show')
  })
});