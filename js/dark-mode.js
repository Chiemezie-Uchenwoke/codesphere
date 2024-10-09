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
