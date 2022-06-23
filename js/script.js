const swiper = new Swiper(".swiper", {
  speed: 500,
  spaceBetween: 30,
  slidesPerView: 1,
  observer: true,
  pagination: {
    el: "#reviews-swiper-control-paginator",
  },
  navigation: {
    nextEl: "#reviews-swiper-control-button-next",
    prevEl: "#reviews-swiper-control-button-prev",
  },
  breakpoints: {
    // when window width is >= 1200px
    1200: {
      slidesPerView: "3",
    },
    // when window width is >= 850px
    850: {
      slidesPerView: "2",
    },
  },
  a11y: {
    prevSlideMessage: "Previous slide",
    nextSlideMessage: "Next slide",
  },
});


const myModal = new HystModal({
  linkAttributeName: 'data-hystmodal',
  catchFocus: true,
  waitTransitions: true,
  closeOnEsc: false,
});

