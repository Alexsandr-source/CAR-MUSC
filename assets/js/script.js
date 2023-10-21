const buttonPasting = document.querySelector("#buttonPasting");
const buttonDetailing = document.querySelector("#buttonDetailing");
const images = document.querySelectorAll('.slider .slider-line .car__block');

buttonPasting.addEventListener('click', (button) => {
    buttonPasting.classList.add("active");
    buttonDetailing.classList.remove("active")
});

buttonDetailing.addEventListener('click', (button) => {
    buttonDetailing.classList.add("active");
    buttonPasting.classList.remove("active")
});
