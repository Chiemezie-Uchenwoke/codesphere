// About Page
const getStarted = document.getElementById("get-started");
getStarted.addEventListener("click", () => {
    window.location.href = "./blog.html";
});

// Mission
/* document.addEventListener("DOMContentLoaded", function () {
    const missionParagraph = document.querySelector(".mission p");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                missionParagraph.classList.add("animate-text");
                observer.unobserve(missionParagraph); // Stops observing once animated
            }
        });
    }, { threshold: 0.1 }); // Trigger when 10% of the element is in view

    observer.observe(missionParagraph);
});
 */