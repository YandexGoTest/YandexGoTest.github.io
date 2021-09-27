// Плавный переход по якорным ссылкам
$(document).ready(function () {
  $("#menu").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1000);
  });
});


$(document).ready(function () {
  $("#hero__container").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1000);
  });
});


$(document).ready(function () {
  $("#header__btn").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1000);
  });
});





//ride-gently

const rideSwiper = new Swiper('.ride-gently__swiper', {

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    // dynamicBullets: true,
  },
  speed: 900,
  // autoplay: {
  //   delay: 3000,
  // },
  slidesOffsetBefore: 150,
});


//Форма
var selector = document.getElementById("phone");

var im = new Inputmask("+7(999) 999-99-99");
im.mask(selector);

new JustValidate('.do-it__form', {
  rules: {

    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        console.log(phone)
        return Number(phone) && phone.length === 10
      }
    },
  },
  messages: {

    tel: 'Проверьте, правильно ли указан номер телефона',
  },
});




