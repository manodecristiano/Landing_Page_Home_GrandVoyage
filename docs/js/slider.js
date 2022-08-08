
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    speed: 500,
    spaceBetween: 0,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        290: {
            slidesPerView: 2,
        },
        500: {
            slidesPerView: 3,
        },
          
    },
  });

