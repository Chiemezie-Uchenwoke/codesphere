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

    // Filter Blog Post.
    const blogContentBox = document.querySelector(".blg-grid-cont");
    const allBlogPosts = document.querySelectorAll(".post");
    const htmlFilter = document.getElementById("html");
    const cssFilter = document.getElementById("css");
    const javascriptFilter = document.getElementById("js");
    const latestFilter = document.getElementById("latest");
    const trendingPosts = document.getElementById("trending");
    const allPosts = document.getElementById("allpost");

    // All Post Filter
    allPosts.addEventListener("click", () => {
        Array.from(allBlogPosts).forEach((post) => {
            post.style.display = "block";
        });
    });

    htmlFilter.addEventListener("click", () => {
        // Convert NodeList to an array and hide all posts by default
        // HTML filter
        Array.from(allBlogPosts).forEach((post) => {
            post.style.display = "none";
        });

        // Convert NodeList to an array and filter
        const htmlPosts = Array.from(allBlogPosts).filter((post) => {
            return post.classList.contains("html");
        });
        
        htmlPosts.forEach((post) => {
            post.style.display = "block";
        });
    });

    // CSS Filter
    cssFilter.addEventListener("click", () => {
        Array.from(allBlogPosts).forEach((post) => {
            post.style.display = "none";
        });

        const cssPosts = Array.from(allBlogPosts).filter((post) => {
            return post.classList.contains("css");
        });

        cssPosts.forEach((post) => {
            post.style.display = "block";
        });
    });

    // JS filter
    javascriptFilter.addEventListener("click", () => {
        Array.from(allBlogPosts).forEach((post) => {
            post.style.display = "none";
        });

        const jsPost = Array.from(allBlogPosts).filter((post) => {
            return post.classList.contains("javascript");
        });

        jsPost.forEach((post) => {
            post.style.display = "block";
        });
    });

    // Latest Filter
    latestFilter.addEventListener("click", () => {
        Array.from(allBlogPosts).forEach((post) => {
            post.style.display = "none";
        });

        const allLatestPost = Array.from(allBlogPosts).filter((post) => {
            return post.classList.contains("recent");
        });

        allLatestPost.forEach((post) => {
            post.style.display = "block";
        });
    });

    // Trending post
    trendingPosts.addEventListener("click", () => {
        Array.from(allBlogPosts).forEach((post) => {
            post.style.display = "none";
        });

        const trendingPost = Array.from(allBlogPosts).filter((post) => {
            return post.classList.contains("trending");
        });

        trendingPost.forEach((post) => {
            post.style.display = "block";
        });
    });

  