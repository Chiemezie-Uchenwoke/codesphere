// Function to display the correct post based on the URL
const getPostContent = () => {
    const allPost = document.querySelectorAll(".post-content");
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get("id");

    // Hide all posts initially
    allPost.forEach((post) => {
        post.style.display = "none";
    });

    // Show the post that matches the ID from the URL
    if (postId) {
        const selectedPost = document.getElementById("post-" + postId);
        if (selectedPost) {
            selectedPost.style.display = "block";

            const navLinks = document.querySelectorAll("header > nav > ul a");

            // Nested if to remove all the active class on post detail page.
            navLinks.forEach((link) => {
                if (link.classList.contains("active")) {
                    link.classList.remove("active");
                }
            });
        } 
        else {
            alert("Post not found");
        }
    } 
    else {
        alert("No post ID provided in the URL");
    }
};

// Run the function when the page loads
document.addEventListener("DOMContentLoaded", getPostContent);
