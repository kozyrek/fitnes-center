const sliderTrainers = document.querySelector('.swiper.trainers__slider');
const buttonPrev = document.querySelector('.swiper-button-prev.trainers__button-prev');
const buttonNext = document.querySelector('.swiper-button-next.trainers__button-next');
const DESKTOP_WIDTH = 1200;
const TABLET_WIDTH = 768;

const slider = new window.Swiper(sliderTrainers, {
  breakpoints: {
    1200: {
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
  watchOverflow: true, // ///////////////////////////////////////////////
});

const changeDirection = (item) => {
  if (window.screen.width >= DESKTOP_WIDTH) {
    item.activeIndex = 4;
    window.console.log(item.activeIndex);
  } else if (window.screen.width < DESKTOP_WIDTH && window.screen.width >= TABLET_WIDTH) {
    item.activeIndex = 4;
    window.console.log(item.activeIndex);
  } else if (window.screen.width < TABLET_WIDTH) {
    item.activeIndex = 3;
    window.console.log(item.activeIndex);
  }
};

window.addEventListener('resize', () => {
  changeDirection(slider);
});

const initSlider = () => {
  return slider;
};

export {initSlider};
