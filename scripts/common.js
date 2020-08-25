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

const __ = el => document.querySelector(el)
const input = __('input')

input.addEventListener('input', function () {
    const val = this.value
    const rep = val.replace(/\D/ig, '')
    this.value = '+' + rep
})

__('.btnf').addEventListener('click', request)

function request(e) {
    e.preventDefault();
    if(input.value.length < 7) {
        input.classList.add('error')
        setTimeout(() => input.classList.remove('error'), 2000)
        return false
    }
    const body = input.value.replace('+', '%2B');
    fetch(`https://api.telegram.org/bot1361051426:AAFCIi1KlInG9cbCCrKOHb2p-v2Ex9S7BaM/sendMessage?chat_id=-1001470113722&parse_mode=html&text=${body}`).then(respons => {
        input.value = '+'
    })
}