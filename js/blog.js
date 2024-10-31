const sideBarOpen = document.getElementById("panel-open");
const sideBarClose = document.getElementById("panel-close");

// Open Side Bar
sideBarOpen.addEventListener("click", () => {
    document.getElementById("side-bar").style.display = "block";
    document.getElementById("side-bar").classList.remove("rm-animate");
    document.getElementById("side-bar").classList.add("animate");
});

// Close Side Bar
sideBarClose.addEventListener("click", () => {
    document.getElementById("side-bar").classList.remove("animate");
    document.getElementById("side-bar").classList.add("rm-animate");
   
    setTimeout(() => {
        document.getElementById("side-bar").style.display = "none";
    }, 1000);
});