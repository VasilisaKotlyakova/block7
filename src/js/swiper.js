import '../scss/brand.scss';
import '../scss/technique.scss';
import '../scss/price.scss';

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
