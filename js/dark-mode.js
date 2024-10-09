let darkModeBox = document.getElementById("darkmode-box");
let iconCont = document.querySelector(".icon-cont");

// Toggle visibility of .icon-cont on darkModeBox click
darkModeBox.addEventListener("click", function showDarkIconBox(event) {
    iconCont.classList.toggle("show");
    event.stopPropagation(); // Prevents the click from reaching the body event
});

// Hide .icon-cont when clicking anywhere else on the document
document.addEventListener("click", function hideDarkIconBox() {
    if (iconCont.classList.contains("show")) {
        iconCont.classList.remove("show");
    }
});


let darkMode = document.getElementById("dk-mode");
let lightMode = document.getElementById("lt-mode");

// Dark mode 
darkMode.addEventListener("click", function applyDarkMode(){
    // Add the class to the body
    document.body.classList.add("dark-mode");
    // header
    document.querySelector("header").classList.add("dark-mode");
    // Nav
    document.querySelector("header > nav").classList.add("dark-mode");
    // Hero
    document.querySelector(".hero").classList.add("dark-mode");
}); 


// Light Mode
lightMode.addEventListener("click", function removeDarkMode(){
        // body
        document.body.classList.remove("dark-mode");
        // header
        document.querySelector("header").classList.remove("dark-mode");
        // Nav
        document.querySelector("header > nav").classList.remove("dark-mode");
        // Hero
        document.querySelector(".hero").classList.remove("dark-mode");
       
});
