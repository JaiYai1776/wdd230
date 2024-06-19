// getDates.js

// Function to dynamically output the current year and last modified date
document.addEventListener("DOMContentLoaded", function() {
    // Get the current year
    var currentYear = new Date().getFullYear();
    // Update the copyright year
    document.getElementById("copyright").textContent = currentYear;

    // Get the last modified date
    var lastModifiedDate = document.lastModified;
    // Update the last modified date
    document.getElementById("lastModified").textContent = lastModifiedDate;
});
