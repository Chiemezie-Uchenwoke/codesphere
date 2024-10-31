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

// Social links side panel
const linkedinPanel = document.getElementById("linkedin-panel");
const gitHubPanel = document.getElementById("github-panel");
const instagramPanel = document.getElementById("instagram-panel");
const mailPanel = document.getElementById("email-panel");

linkedinPanel.addEventListener("click", function goToLinkedin(){
        window.open("https://www.linkedin.com/in/chiemezieuche/", "_blank");
    });

gitHubPanel.addEventListener("click", function openGitHub(){
        window.open("https://github.com/Chiemezie-Uchenwoke", "_blank");
    });

instagramPanel.addEventListener("click", function openIg(){
        window.open("https://www.instagram.com/chiemezie_uchenwoke?igsh=MWs4aW9tenBuYnpyMQ==", "_blank");
    });

mailPanel.addEventListener("click", function openMail(){
        window.open("mailto:uchenwoke.chiemezie@gmail.com", "_blank");
    });