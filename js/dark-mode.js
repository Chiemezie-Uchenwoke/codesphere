let darkModeBox = document.getElementById("darkmode-box");
let iconCont = document.querySelector(".icon-cont");

// Toggle visibility of .icon-cont on darkModeBox click
darkModeBox.addEventListener("click", function (event) {
    iconCont.classList.toggle("show");
    event.stopPropagation(); // Prevents the click from reaching the body event
});

// Hide .icon-cont when clicking anywhere else on the document
document.addEventListener("click", function () {
    if (iconCont.classList.contains("show")) {
        iconCont.classList.remove("show");
    }
});

// Dark mode and light mode toggles
let darkMode = document.getElementById("dk-mode");
let lightMode = document.getElementById("lt-mode");

darkMode.addEventListener("click", applyDarkMode);
lightMode.addEventListener("click", removeDarkMode);

// Check localStorage on page load to apply the saved theme
if (localStorage.getItem('theme') === 'dark') {
    applyDarkMode();
} else {
    removeDarkMode();
}

// Function to apply dark mode
function applyDarkMode(){
    const elementsToToggle = [
        document.body,
        document.querySelector("header"),
        document.querySelector("header > nav"),
        document.querySelector(".hero"),
        document.querySelector(".w-get"),
        document.querySelector(".featured"),
        document.querySelector(".inspire"),
        document.querySelector(".contact"),
        document.querySelector("footer"),
        document.querySelector(".abt-hero")
    ];

    elementsToToggle.forEach(el => {
        if (el) el.classList.add("dark-mode");
    });

    // Save preference in localStorage
    localStorage.setItem('theme', 'dark');
}

// Function to remove dark mode
function removeDarkMode(){
    const elementsToToggle = [
        document.body,
        document.querySelector("header"),
        document.querySelector("header > nav"),
        document.querySelector(".hero"),
        document.querySelector(".w-get"),
        document.querySelector(".featured"),
        document.querySelector(".inspire"),
        document.querySelector(".contact"),
        document.querySelector("footer"),
        document.querySelector(".abt-hero")
    ];

    elementsToToggle.forEach(el => {
        if (el) el.classList.remove("dark-mode");
    });

    // Save preference in localStorage
    localStorage.setItem('theme', 'light');
}
