import Swiper from '../vendor.js';

const slider = document.querySelector('.swiper');
const buttonPrev = document.querySelector('.swiper-button-prev');
const buttonNext = document.querySelector('.swiper-button-next');

const swiper = new Swiper(slider, {
  navigation: {
    nextEl: buttonNext,
    prevEl: buttonPrev,
  },
});

const initSlider = () => {
  swiper();
};

export {initSlider};
