const hamburger = document.getElementById("hamburger");
const close = document.getElementById("close"); // Get the close button
const mobileMenu = document.getElementById("mobile-menu");
const body = document.body;

document.getElementById('hamburger').addEventListener('click', function() {
    this.classList.toggle('open');
    document.getElementById('navigation').classList.toggle('open');
});




// Toggle dark mode
document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.querySelector('#dark-mode-toggle');
    const body = document.body;

    // Check if dark mode preference is stored in local storage
    const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
    if (isDarkMode) {
        body.classList.add('dark-mode');
        darkModeToggle.checked = true;
    }

    // Toggle dark mode on click
    darkModeToggle.addEventListener('change', function() {
        if (this.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', null);
        }
    });
});

