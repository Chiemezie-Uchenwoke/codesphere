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


// Carousel
let carouselDivImage = document.getElementById("carousel-img");

function imageCarousel(){
    let carouselImages = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg", "img7.jpg"];

    let numberOfImages = carouselImages.length;
    let createRandomNumber = Math.random();
    // console.log(createRandomNumber);
    createRandomNumber = createRandomNumber * numberOfImages;
    createRandomNumber = Math.floor(createRandomNumber);

    let ImageUrl = "assets/images/" + carouselImages[createRandomNumber];

    carouselDivImage.setAttribute("src", ImageUrl);
}
imageCarousel();
setInterval(imageCarousel, 5000);