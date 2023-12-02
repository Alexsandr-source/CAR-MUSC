const changeService = document.querySelectorAll('.our-services__button');
const buttonPasting = document.querySelector('#buttonPasting');
const buttonDetailing = document.querySelector('#buttonDetailing');
const slider = document.querySelector('.car__slide-line');
const slides = Array.from(slider.querySelectorAll('.car__section'));
const prevButton = document.querySelector('#prevButton');
const nextButton = document.querySelector('#nextButton');
const slideCount = slides.length;
let slideIndex = 0;
// OUR SERVICES button //

// Set event handlers for buttons
buttonPasting.addEventListener('click', changesServices);
buttonDetailing.addEventListener('click', changesServices);

// Function for updating the buttons
function changesServices() {
    for(var i = 0; i < changeService.length; i++) {
        changeService[i].classList.remove('active');
    }
    if (this.className === ('our-services__button active')) {
        this.classList.remove('active')
    } else {
        this.classList.add('active');
    }
};

// Slider line //

// Set event handlers for buttons
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Function for showing the previous slide
function showPreviousSlide() {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    updateSlider();
}

// Function for displaying the next slide
function showNextSlide() {
    slideIndex = (slideIndex + 1) % slideCount;
    updateSlider();
}

// Function to update the slider display
function updateSlider() {
slides.forEach((slide, index) => {
    if (index === slideIndex) {
        slide.style.display = 'flex';
    } else {
        slide.style.display = 'none';
    }
});
}

// Initializing the slider
updateSlider();