document.getElementById("last-modified").textContent = "Last modified: " + document.lastModified;

document.addEventListener('DOMContentLoaded', function() {
    // Retrieve last visit date from localStorage
    let lastVisit = localStorage.getItem('lastVisit');

    if (!lastVisit) {
        // First visit
        showAlert("Welcome! Let us know if you have any questions.");
    } else {
        // Calculate days since last visit
        let today = new Date();
        let daysPassed = Math.floor((today - new Date(lastVisit)) / (1000 * 60 * 60 * 24));

        if (daysPassed === 0) {
            // Less than a day
            showAlert("Back so soon! Awesome!");
        } else {
            // More than a day
            let message = `You last visited ${daysPassed} day${daysPassed === 1 ? '' : 's'} ago.`;
            showAlert(message);
        }
    }

    // Store current visit date
    localStorage.setItem('lastVisit', new Date().toString());
});

function showAlert(message) {
    let alertContainer = document.getElementById('alertContainer');
    alertContainer.textContent = message;
    alertContainer.classList.add('show');

    setTimeout(function() {
        alertContainer.classList.remove('show');
    }, 3000); // Hide after 3 seconds
}

document.addEventListener('DOMContentLoaded', function() {
    const today = new Date();
    const dayOfWeek = today.getDay(); // Sunday - 0, Monday - 1, ..., Saturday - 6
    if (dayOfWeek >= 1 && dayOfWeek <= 3) { // 1 (Monday) to 3 (Wednesday)
        const banner = document.createElement('div');
        banner.id = 'meetGreetBanner';
        banner.innerHTML = `
            <p>Join us for the Chamber of Commerce Meet and Greet on Wednesday at 7:00 PM!</p>
            <button onclick="document.getElementById('meetGreetBanner').style.display='none'">❌ Close</button>
        `;
        document.body.insertBefore(banner, document.body.firstChild);
    }
});
