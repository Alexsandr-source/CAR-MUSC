const changeService = document.querySelectorAll('.our-services__button');
const buttonPasting = document.querySelector('#buttonPasting');
const buttonDetailing = document.querySelector('#buttonDetailing');
const carSlider = document.querySelector('.car__slide-line');
const carSlides = Array.from(carSlider.querySelectorAll('.car__section'));
const advantagesSlider = document.querySelector('.our-advantages__scroll-line');
const advantagesSlider2 = document.querySelector('.our-advantages__scroll-line2');
const advantagesSlides = Array.from(advantagesSlider.querySelectorAll('.our-advantages__scroll-text'));
const advantagesSlides2 = Array.from(advantagesSlider2.querySelectorAll('.our-advantages__scroll-text2'));
const carPrev = document.querySelector('#prevCarButton');
const carNext = document.querySelector('#nextCarButton');
const advantagesPrev = document.querySelector('#prevAdvantagesButton');
const advantagesNext = document.querySelector('#nextAdvantagesButton');
const advantagesPrev2 = document.querySelector('#prevAdvantagesButton2');
const advantagesNext2 = document.querySelector('#nextAdvantagesButton2');
const carCount = carSlides.length;
const advantagesCount = advantagesSlides.length;
const advantagesCount2 = advantagesSlides2.length;
let carIndex = 0;
let advantagesIndex = 0;
let advantagesIndex2 = 0;


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


// carSlider line //

// Set event handlers for buttons
carPrev.addEventListener('click', carPreviousSlide);
carNext.addEventListener('click', carNextSlide);
// Function for showing the previous slide
function carPreviousSlide() {
    carIndex = (carIndex - 1 + carCount) % carCount;
    updateCar();
}
// Function for displaying the next slide
function carNextSlide() {
    carIndex = (carIndex + 1) % carCount;
    updateCar();
}
// Function to update the slider display
function updateCar() {
    carSlides.forEach((slide, index) => {
    if (index === carIndex) {
        slide.style.display = 'flex';
    } else {
        slide.style.display = 'none';
    }
});
}
// Initializing the slider
updateCar();


// AdvantagesSlider line //

// Set event handlers for buttons
advantagesPrev.addEventListener('click', showPreviousSlide);
advantagesNext.addEventListener('click', showNextSlide);
// Function for showing the previous slide
function showPreviousSlide() {
    advantagesIndex = (advantagesIndex - 1 + advantagesCount) % advantagesCount;
    updateAdvantages();
}
// Function for displaying the next slide
function showNextSlide() {
    advantagesIndex = (advantagesIndex + 1) % advantagesCount;
    updateAdvantages();
}
// Function to update the slider display
function updateAdvantages() {
    advantagesSlides.forEach((slide, index) => {
    if (index === advantagesIndex) {
        slide.style.display = 'flex';
    } else {
        slide.style.display = 'none';
    }
});
}
// Initializing the slider
updateAdvantages();


// AdvantagesSlider line 2//

// Set event handlers for buttons
advantagesPrev2.addEventListener('click', showPreviousSlide2);
advantagesNext2.addEventListener('click', showNextSlide2);
// Function for showing the previous slide
function showPreviousSlide2() {
    advantagesIndex2 = (advantagesIndex2 - 1 + advantagesCount2) % advantagesCount2;
    updateAdvantages2();
}
// Function for displaying the next slide
function showNextSlide2() {
    advantagesIndex2 = (advantagesIndex2 + 1) % advantagesCount2;
    updateAdvantages2();
}
// Function to update the slider display
function updateAdvantages2() {
    advantagesSlides2.forEach((slide, index) => {
    if (index === advantagesIndex2) {
        slide.style.display = 'flex';
    } else {
        slide.style.display = 'none';
    }
});
}
// Initializing the slider
updateAdvantages2();