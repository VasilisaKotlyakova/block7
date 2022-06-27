let buttonBurger = document.querySelector('.header__button:first-of-type'); // ищем кнопку бургер
let buttonClose = document.querySelector('.aside-header__icon');
let body = document.querySelector('body');

let aside= document.querySelector('.aside');

const overlay = document.querySelector(".overlay");

//отслеживаем клик по кнопке
buttonBurger.addEventListener('click', function() {

  overlay.classList.remove("hidden");

  aside.classList.remove('modal');

  if(window.innerWidth >= 320 && window.innerWidth < 768) {
    body.style.height = "676px";
    body.style.overflow = "hidden";
  }

  if(window.innerWidth >= 768 && window.innerWidth < 1440) {
    body.style.height = "1024px";
    body.style.overflow = "hidden";
  }
});

buttonClose.addEventListener('click', function() {
  aside.classList.add('modal');
  overlay.classList.add("hidden");

  //инициализируем swiper
  if (window.matchMedia("(min-width: 768px)").matches) {
    /* the viewport is at least 768 pixels wide */
  } else {
    /* the viewport is less than 768 pixels wide */

    const swiper = new Swiper('.brand__row', {
      direction: 'horizontal',
      slidesPerView: "auto",
      //отступ между слайдами
      spaceBetween: 16,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
    });

    const swiper_technique = new Swiper('.technique__row', {
      direction: 'horizontal',
      slidesPerView: "auto",
      //отступ между слайдами
      spaceBetween: 16,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
    });

    const swiper_price = new Swiper('.wrapper-price', {
      direction: 'horizontal',
      slidesPerView: "auto",
      //отступ между слайдами
      spaceBetween: 16,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
    });
  }
});

overlay.addEventListener("click", function() {

  aside.classList.add('modal');

  overlay.classList.add("hidden");

  if (window.matchMedia("(min-width: 768px)").matches) {
    /* the viewport is at least 768 pixels wide */
  } else {
    /* the viewport is less than 768 pixels wide */

    const swiper = new Swiper('.brand__row', {
      direction: 'horizontal',
      slidesPerView: "auto",
      //отступ между слайдами
      spaceBetween: 16,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
    });

    const swiper_technique = new Swiper('.technique__row', {
      direction: 'horizontal',
      slidesPerView: "auto",
      //отступ между слайдами
      spaceBetween: 16,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
    });

    const swiper_price = new Swiper('.wrapper-price', {
      direction: 'horizontal',
      slidesPerView: "auto",
      //отступ между слайдами
      spaceBetween: 16,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
    });
  }
});
