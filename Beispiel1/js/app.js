const swiper = new Swiper('.swiper', {
    mousewheel: true,
    direction: 'vertical',
    speed: 1700,
    parallax: true
});

const letterElements = document.querySelectorAll('.header-content h1');

letterElements.forEach(element => {
    const text = element.textContent.trim();
    const wrappedLetters = text.replace(/([^\s])/g, '<span class="letter">$1</span>');
    element.innerHTML = wrappedLetters;

    const letters = element.querySelectorAll('.letter');
    const total = letters.length;
    letters.forEach((letter, i) => {
        letter.style.zIndex = total - i;
        letter.style.transitionDelay = `${i * 40}ms`;
        letter.style.transitionDuration = `${1.1 + i * 0.15}s`;
    });
});

swiper.on('slideChange', function () {
    const contentSlides = document.querySelectorAll('.header-content__slide');
    contentSlides.forEach((slide, index) => {
        if (swiper.activeIndex === index) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
});
