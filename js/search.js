// Sample data array for posts
const posts = [
    { title: "Understanding Flexbox in CSS", content: "Learn the basics of Flexbox, one of the most powerful layout systems in CSS." },
    { title: "A Guide to JavaScript Promises", content: "Promises are a powerful way to handle asynchronous operations in JavaScript." },
    { title: "Getting Started with Git and GitHub", content: "Version control is essential for developers. Learn the basics of Git and GitHub." },
    // Add more posts here
];

// Grab the search bar and results container
const searchBar = document.getElementById("search-bar");
const searchResults = document.getElementById("search-results");

// Add an event listener to handle search input changes
searchBar.addEventListener("input", function () {
    const searchTerm = searchBar.value.toLowerCase();
    const filteredPosts = posts.filter(post => 
        post.title.toLowerCase().includes(searchTerm) || 
        post.content.toLowerCase().includes(searchTerm)
    );
    displayResults(filteredPosts);
});

// Function to display the results
function displayResults(filteredPosts) {
    // Clear previous results
    searchResults.innerHTML = "";

    if (filteredPosts.length === 0) {
        searchResults.innerHTML = "<p>No results found.</p>";
        return;
    }

    // Create and append results for each post
    filteredPosts.forEach(post => {
        const postDiv = document.createElement("div");
        postDiv.classList.add("post");

        const title = document.createElement("h3");
        title.textContent = post.title;

        const content = document.createElement("p");
        content.textContent = post.content;

        postDiv.appendChild(title);
        postDiv.appendChild(content);
        searchResults.appendChild(postDiv);
    });
}
