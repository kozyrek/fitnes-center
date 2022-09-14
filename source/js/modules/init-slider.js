const sliderTrainers = document.querySelector('.swiper.trainers__slider');
const buttonPrev = document.querySelector('.swiper-button-prev.trainers__button-prev');
const buttonNext = document.querySelector('.swiper-button-next.trainers__button-next');
// const DESKTOP_WIDTH = 1200;
// const TABLET_WIDTH = 768;

const slider = new window.Swiper(sliderTrainers, {
  slidesPerView: 4,
  spaceBetween: 40,
  initialSlide: 0,
  breakpoints: {
    1199: {
      slidesPerView: 4,
      spaceBetween: 40,
      initialSlide: 0,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 30,
      initialSlide: 2,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
      initialSlide: 2,
    },
  },
  loop: true,
  navigation: {
    nextEl: buttonNext,
    prevEl: buttonPrev,
  },
  watchOverflow: true,
});

// const changeDirection = (item) => {
//   if (window.screen.width >= DESKTOP_WIDTH) {
//     item.activeIndex = 4;
//   } else if (window.screen.width < DESKTOP_WIDTH && window.screen.width >= (TABLET_WIDTH - 1)) {
//     item.activeIndex = 4;
//   } else if (window.screen.width < (TABLET_WIDTH - 1)) {
//     item.activeIndex = 3;
//   }
// };

// window.addEventListener('resize', () => {
//   if (slider) {
//     changeDirection(slider);
//   }
// });

const initSlider = () => {
  return slider;
};

export {initSlider};

// spaceBetween: 0,////
//   slidesPerView: 1,
// direction: 'horizontal',
// simulateTouch: true,
// grabCursor: true,
// slideToClickedSlide: true,
// keyboard: {
//   enabled: true,
//   onlyInViewport: true,
//   pageUpDown: true
