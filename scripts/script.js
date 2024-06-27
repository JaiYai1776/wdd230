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

    // Page visit counter using localStorage
    let pageVisits = localStorage.getItem('pageVisits');
    if (!pageVisits) {
        pageVisits = 0;
    }
    pageVisits++;
    localStorage.setItem('pageVisits', pageVisits);
    document.getElementById('page-visits').textContent = `Total Page Visits: ${pageVisits}`;

});

// Hamburger menu toggle
document.getElementById('hamburger').addEventListener('click', function() {
    this.classList.toggle('open');
    document.getElementById('navigation').classList.toggle('open');
});
