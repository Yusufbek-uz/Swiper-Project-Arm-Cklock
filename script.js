const swiperContainer = document.querySelector('swiper-container');
swiperContainer.swiper.on('slideChange', () => {
    const activeSlide = swiperContainer.querySelector('.swiper-slide-active');
    const color = activeSlide.getAttribute('data-color');
    document.body.style.backgroundColor = color;
});