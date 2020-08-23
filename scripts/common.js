const swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    keyboard: true,
});