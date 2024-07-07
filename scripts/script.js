document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.querySelector('#dark-mode-toggle');
    const body = document.body;

    // Toggle dark mode based on localStorage
    const toggleDarkMode = () => {
        body.classList.toggle('dark-mode', darkModeToggle.checked);
        localStorage.setItem('darkMode', darkModeToggle.checked ? 'enabled' : null);
    };

    // Initialize dark mode state
    darkModeToggle.checked = localStorage.getItem('darkMode') === 'enabled';
    toggleDarkMode();

    // Toggle dark mode on change
    darkModeToggle.addEventListener('change', toggleDarkMode);

    // Page visit counter using localStorage
    let pageVisits = localStorage.getItem('pageVisits') || 0;
    pageVisits++;
    localStorage.setItem('pageVisits', pageVisits);
    document.getElementById('page-visits').textContent = `Total Page Visits: ${pageVisits}`;

    // Hamburger menu toggle
    document.getElementById('hamburger').addEventListener('click', function() {
        this.classList.toggle('open');
        document.getElementById('navigation').classList.toggle('open');
    });
});
