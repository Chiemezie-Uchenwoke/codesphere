// Mobile Nav
const hamburger = document.querySelector("span#hamburger");
const mobileNavCont = document.querySelector(".nav-wrapper");

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

// Hide Intro text in Header onScroll
/* function myfunction(){
    document.querySelector(".intro-txt").style.display = "none";
} */

// Carousel
const carouselDivImage = document.getElementById("carousel-img");

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
setInterval(imageCarousel, 4000);

// What You Get Section
let button1 = document.getElementById("code");
let button2 = document.getElementById("project");
let button3 = document.getElementById("tech");
let para1 = document.getElementById("g-s-p1");
let para2 = document.getElementById("g-s-p2");
let para3 = document.getElementById("g-s-p3");

button2.addEventListener("click", function showp2(){
    button1.classList.remove("btn-style");
    button3.classList.remove("btn-style");
    para1.style.display = "none";
    para3.style.display = "none";
    button2.classList.add("btn-style");
    para2.style.display = "block";
});

button3.addEventListener("click", function showp3(){
    button1.classList.remove("btn-style");
    button2.classList.remove("btn-style");
    para1.style.display = "none";
    para2.style.display = "none";
    button3.classList.add("btn-style");
    para3.style.display = "block";
});

button1.addEventListener("click", function showp1(){
    button2.classList.remove("btn-style");
    button3.classList.remove("btn-style");
    para2.style.display = "none";
    para3.style.display = "none";
    button1.classList.add("btn-style");
    para1.style.display = "block";
});

// Inspire
let firstText = document.getElementById("isp1");
let secondText = document.getElementById("isp2");
let thirdText = document.getElementById("isp3");

function inspireTextEffect(){
    if (firstText.style.display === "block"){
        firstText.style.display = "none";
        secondText.style.display = "block";
        thirdText.style.display = "none";
    }

    else if (secondText.style.display === "block"){
        secondText.style.display = "none";
        firstText.style.display = "none";
        thirdText.style.display = "block";
    }

    else {
        firstText.style.display = "block";              
        secondText.style.display = "none";
        thirdText.style.display = "none";
    }
}

firstText.style.display = "block";
secondText.style.display = "none";
thirdText.style.display = "none"
setInterval(inspireTextEffect, 3000);

// Contact-section
const linkedin = document.getElementById("linkedin");
const gitHub = document.getElementById("github");
const instagram = document.getElementById("instagram");
const mail = document.getElementById("email");

linkedin.addEventListener("click", function goToLinkedin(){
        window.open("https://www.linkedin.com/in/chiemezieuche/", "_blank");
    });

gitHub.addEventListener("click", function openGitHub(){
        window.open("https://github.com/Chiemezie-Uchenwoke", "_blank");
    });

instagram.addEventListener("click", function openIg(){
        window.open("https://www.instagram.com/chiemezie_uchenwoke?igsh=MWs4aW9tenBuYnpyMQ==", "_blank");
    });

mail.addEventListener("click", function openMail(){
        window.open("mailto:uchenwoke.chiemezie@gmail.com", "_blank");
    });