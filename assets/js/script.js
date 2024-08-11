// add event on multiple elements

const addEventOnElements = function(elements , evenType , callback){
    for(let i = 0; i < elements.length; i++){
        elements[i].addEventListener(evenType, callback);
    }
} 

// mobile navbar

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNav = function() {
    navbar.classList.toggle("active");
    this.classList.toggle("active");
}

navToggler.addEventListener("click" , toggleNav);

const navClose = () => {
    navbar.classList.remove("active");
    navToggler.classList.remove("active");
}

addEventOnElements(navLinks , "click" , navClose);

// mobile navbar


// Header

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");
const activeEl = function(){
    if(window.scrollY > 100){
        header.classList.add("active");
        backTopBtn.classList.add("active");
    } else{
        header.classList.remove("active");
        backTopBtn.classList.remove("active");
    }
}

window.addEventListener("scroll" , activeEl);
window.addEventListener("backTopBtn" , activeEl);

// Header

// button hover

const button = document.querySelectorAll("[data-btn]");

addEventOnElements(button , "mousemove" , function(e){
    this.style.setProperty("--top" , `${e.offsetY}px`)
    this.style.setProperty("--left" , `${e.offsetX}px`)
});


// button hover

// revealed

const revealElements = document.querySelectorAll("[data-reveal]");

const revealElementsOnScroll = function() {
    for ( let i = 0; i < revealElements.length ; i++  ) {
        const isRevealElements = revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.5;
        if(isRevealElements){
            revealElements[i].classList.add("revealed")
        } else{
            revealElements[i].classList.remove("revealed")
        }
    } ;
};

window.addEventListener("scroll" ,revealElementsOnScroll);
window.addEventListener("load" ,revealElementsOnScroll);


// cursor

const cursor = document.querySelector("[data-cursor]");
const hoverElements = [...document.querySelectorAll("a") ,...document.querySelectorAll("button")];

document.addEventListener("mousemove", function(e) {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});

addEventOnElements ( hoverElements ,"mouseover", function() {
    cursor.classList.add("hovered");
});

addEventOnElements ( hoverElements ,"mouseout", function() {
    cursor.classList.remove("hovered");
});


