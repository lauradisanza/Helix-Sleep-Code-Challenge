const mainMenu = document.querySelector('.main-menu');
const closeMenu = document.querySelector('.close-menu');
const openMenu = document.querySelector('.open-menu');

//Hamburger menu
openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}

function close() {
    mainMenu.style.top = '-100%';
}



/* Changing product color */

//Large Images of Variant Colors
const amberSofaImg = document.querySelector('.product1');
const charcoalSofaImg = document.querySelector('.product2');
const redSofaImg = document.querySelector('.product3');
//Variant Selector Buttons
const amberSofaButton = document.querySelector('.variant1');
const charcoalSofaButton = document.querySelector('.variant2');
const redSofaButton = document.querySelector('.variant3');
//Variant Selector Buttons - Color Descriptions
const amberColor = document.querySelector('.color1');
const charcoalColor = document.querySelector('.color2');
const redColor = document.querySelector('.color3');


amberSofaButton.addEventListener("click", function () {
    //Remove Red
    redSofaImg.classList.remove("selected");
    redSofaButton.classList.remove("border");
    redColor.classList.remove("background-active");
    //Remove Charcoal
    charcoalSofaImg.classList.remove("selected");
    charcoalSofaButton.classList.remove("border");
    charcoalColor.classList.remove("background-active");
    //Add Amber
    amberSofaImg.classList.add("selected");
    amberSofaButton.classList.add("border");
    amberColor.classList.add("background-active");
});

charcoalSofaButton.addEventListener("click", function () {
    //Remove Red
    redSofaImg.classList.remove("selected");
    redSofaButton.classList.remove("border");
    redColor.classList.remove("background-active");
    //Remove Amber
    amberSofaImg.classList.remove("selected");
    amberSofaButton.classList.remove("border");
    amberColor.classList.remove("background-active");
    //Add Charcoal
    charcoalSofaImg.classList.add("selected");
    charcoalSofaButton.classList.add("border");
    charcoalColor.classList.add("background-active");
});

redSofaButton.addEventListener("click", function () {
    //Remove Charcoal
    charcoalSofaImg.classList.remove("selected");
    charcoalSofaButton.classList.remove("border");
    charcoalColor.classList.remove("background-active");
    //Remove Amber
    amberSofaImg.classList.remove("selected");
    amberSofaButton.classList.remove("border");
    amberColor.classList.remove("background-active");
    //Add Red
    redSofaImg.classList.add("selected");
    redSofaButton.classList.add("border");
    redColor.classList.add("background-active");
});
