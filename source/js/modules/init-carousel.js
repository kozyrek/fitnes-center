const sliderReviews = document.querySelector('.swiper.reviews__carousel');
const buttonPrev = document.querySelector('.swiper-button-prev.reviews__button-prev');
const buttonNext = document.querySelector('.swiper-button-next.reviews__button-next');

const carousel = new window.Swiper(sliderReviews, {
  slidesPerView: 1,
  loop: false,
  navigation: {
    nextEl: buttonNext,
    prevEl: buttonPrev,
  },
  watchOverflow: true,
});

const initCarousel = () => {
  return carousel;
};

export {initCarousel};
