let hamburger = document.querySelector("span#hamburger");
let mobileNavCont = document.querySelector(".nav-wrapper");

hamburger.addEventListener("click", showNav);

function showNav(){
    mobileNavCont.classList.toggle("show");
}