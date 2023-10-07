const buttonPasting = document.querySelector("#buttonPasting");
const buttonDetailing = document.querySelector("#buttonDetailing");

buttonPasting.addEventListener('click', (button) => {
    console.log("sosi");
    buttonPasting.classList.add("active");
    buttonDetailing.classList.remove("active")
});
buttonDetailing.addEventListener('click', (button) => {
    console.log("sosi");
    buttonDetailing.classList.add("active");
    buttonPasting.classList.remove("active")
});