// Mobile Nav
let hamburger = document.querySelector("span#hamburger");
let mobileNavCont = document.querySelector(".nav-wrapper");

hamburger.addEventListener("click", showNav);

function showNav(){
    mobileNavCont.classList.toggle("show");
}

// Intro Text
function revealText(){
    let introText = document.querySelector("#txt");
    let playText = document.querySelector(".play-txt");

    if (introText.style.display === "none"){
        introText.style.display = "block";
        playText.style.display = "none";
    }else{
        introText.style.display = "none";
        playText.style.display = "block";
    }

}
setInterval(revealText, 5000);
document.querySelector(".play-txt").style.display = "none";