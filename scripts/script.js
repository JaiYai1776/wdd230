const hamburger = document.getElementById("hamburger");
const close = document.getElementById("close"); // Get the close button
const mobileMenu = document.getElementById("mobile-menu");
const body = document.body;

hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
    body.classList.add("no-scroll"); // Prevent scrolling when menu is open
});

close.addEventListener("click", () => { // Add event listener for close button
    mobileMenu.classList.remove("open");
    body.classList.remove("no-scroll"); // Allow scrolling when menu is closed
});

document.getElementById("dark-mode-toggle").addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    // Toggle additional elements to dark mode if needed
});
