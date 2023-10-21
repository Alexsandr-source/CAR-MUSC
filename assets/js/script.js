const buttonPasting = document.querySelector("#buttonPasting");
const buttonDetailing = document.querySelector("#buttonDetailing");
const images = document.querySelectorAll('.slider .slider-line .car__block');
// const sliderLine = document.querySelector('.slider-line');
// let count = 0;
// let width;

buttonPasting.addEventListener('click', (button) => {
    buttonPasting.classList.add("active");
    buttonDetailing.classList.remove("active")
});

buttonDetailing.addEventListener('click', (button) => {
    buttonDetailing.classList.add("active");
    buttonPasting.classList.remove("active")
});

// function init() {
//     console.log('resize');
//     width = document.querySelector('.slider').offsetWidth;
//     sliderLine.style.width = width * images.length + 'px';
//     images.forEach(item => {
//         item.style.width = width + 'px';
//     });
// }

// init();