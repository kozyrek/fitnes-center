const sliderTrainers = document.querySelector('.swiper.trainers__slider');
const buttonPrev = document.querySelector('.swiper-button-prev.trainers__button-prev');
const buttonNext = document.querySelector('.swiper-button-next.trainers__button-next');
const DESKTOP_WIDTH = 1200;
const TABLET_WIDTH = 768;

export const slider = new window.Swiper(sliderTrainers, {
  loop: true,
  spaceBetween: 0,
  slidesPerView: 1,
  // initialSlide: 2,

  navigation: {
    nextEl: buttonNext,
    prevEl: buttonPrev,
  },

  breakpoints: {
    320: {
      spaceBetween: 10,
      slidesPerView: 1,
      initialSlide: 2,
    },
    767: {
      spaceBetween: 30,
      slidesPerView: 2,
      initialSlide: 2,
    },
    1199: {
      spaceBetween: 40,
      slidesPerView: 4,
      initialSlide: 0,
    },
  },
});

const changeDirection = (item) => {
  if (window.screen.width >= DESKTOP_WIDTH) {
    item.activeIndex = 4;
  } else if (window.screen.width < DESKTOP_WIDTH && window.screen.width >= (TABLET_WIDTH - 1)) {
    item.activeIndex = 4;
  } else if (window.screen.width < (TABLET_WIDTH - 1)) {
    item.activeIndex = 3;
  }
};

window.addEventListener('resize', () => {
  if (slider) {
    changeDirection(slider);
  }
});

// const initSlider = () => {
//   return slider;
// };

// export {initSlider};
