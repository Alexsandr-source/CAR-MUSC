const buttonPasting = document.querySelector('#buttonPasting');
const buttonDetailing = document.querySelector('#buttonDetailing');
const slider = document.getElementsByClassName('slider-line');
const slides = document.getElementsByClassName('car__section');
const prevButton = document.getElementsByClassName('slide-prev');
const nextButton = document.getElementsByClassName('slide-next');

buttonPasting.addEventListener('click', (button) => {
    buttonPasting.classList.add("active");
    buttonDetailing.classList.remove("active")
});

buttonDetailing.addEventListener('click', (button) => {
    buttonDetailing.classList.add("active");
    buttonPasting.classList.remove("active")
});
