const buttonPasting = document.querySelector('#buttonPasting');
const buttonDetailing = document.querySelector('#buttonDetailing');
const slides = document.getElementsByClassName('car__section');
// const prevButton = document.getElementsByClassName('slide-prev');
// const nextButton = document.getElementsByClassName('slide-next');

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

for (let i = 0; i < slides.length; i++) {
    let slide = slides[i]
    console.log(slide);
}

function nextButton(slide) {
    slide++
}

// nextButton.addEventListener('click', (nextButton) => {
    
// });


// prevButton.addEventListener('click', (_button) => {
// });
