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

// Beginning of dark-mode logic

let darkMode = document.getElementById("dk-mode");
let lightMode = document.getElementById("lt-mode");

darkMode.addEventListener("click", applyDarkMode);
lightMode.addEventListener("click", removeDarkMode);

// Check localStorage on page load to apply the saved theme: This calls either the darkmode or light mode function
if (localStorage.getItem('theme') === 'dark') {
    applyDarkMode();
} else {
    removeDarkMode();
}

// Dark mode 
function applyDarkMode(){
    // Add the class to the body
    document.body?.classList.add("dark-mode");
    // header
    document.querySelector("header")?.classList.add("dark-mode");
    // Nav
    document.querySelector("header > nav")?.classList.add("dark-mode");
    // Hero
    document.querySelector(".hero")?.classList.add("dark-mode");
    // What you get
    document.querySelector(".w-get")?.classList.add("dark-mode");
    // Featured Post
    document.querySelector(".featured")?.classList.add("dark-mode");
    // Inspire
    document.querySelector(".inspire")?.classList.add("dark-mode");
    // Contact
    document.querySelector(".contact")?.classList.add("dark-mode");
    // Footer
    document.querySelector("footer")?.classList.add("dark-mode");

    // About Page
    document.querySelector(".abt-hero")?.classList.add("dark-mode");

   
    // Save preference in localStorage
    localStorage.setItem('theme', 'dark');
}


// Light Mode
function removeDarkMode(){
        // body
        document.body?.classList.remove("dark-mode");
        // header
        document.querySelector("header")?.classList.remove("dark-mode");
        // Nav
        document.querySelector("header > nav")?.classList.remove("dark-mode");
        // Hero
        document.querySelector(".hero")?.classList.remove("dark-mode");
        // What you get
        document.querySelector(".w-get")?.classList.remove("dark-mode");
        // Featured Post
        document.querySelector(".featured")?.classList.remove("dark-mode");
        // Inspire
        document.querySelector(".inspire")?.classList.remove("dark-mode");
         // Contact
        document.querySelector(".contact")?.classList.remove("dark-mode");
        // Footer
        document.querySelector("footer")?.classList.remove("dark-mode");

           // About Page
    document.querySelector(".abt-hero")?.classList.remove("dark-mode");

    
        // Save preference in localStorage
        localStorage.setItem('theme', 'light');
}
