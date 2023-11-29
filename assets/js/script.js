const buttonPasting = document.querySelector('#buttonPasting');
const buttonDetailing = document.querySelector('#buttonDetailing');
const slider = document.querySelector('.car__slide-line');
const slides = Array.from(slider.querySelectorAll('.car__section'));
const prevButton = document.querySelector('#prevButton');
const nextButton = document.querySelector('#nextButton');
const slideCount = slides.length;
let slideIndex = 0;

// OUR SERVICES button //

buttonPasting.addEventListener('click', (_button) => {
    buttonPasting.classList.add("active");
    buttonDetailing.classList.remove("active")
});

buttonDetailing.addEventListener('click', (_button) => {
    buttonDetailing.classList.add("active");
    buttonPasting.classList.remove("active")
});

// Slider line //

// Устанавливаем обработчики событий для кнопок

prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
    slideIndex = (slideIndex + 1) % slideCount;
    updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
slides.forEach((slide, index) => {
    if (index === slideIndex) {
        slide.style.display = 'flex';
    } else {
        slide.style.display = 'none';
    }
});
}

// Инициализация слайдера
updateSlider();