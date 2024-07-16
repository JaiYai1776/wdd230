function validateForm(event) {
    const formData = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value,
        confirmPassword: document.getElementById('confirm_password').value,
        email: document.getElementById('email').value,
    };

    // Validate email format
    if (!isValidEmail(formData.email)) {
        alert('Please enter a valid @byui.edu email address.');
        document.getElementById('email').focus();
        event.preventDefault(); // Prevent form submission
        return false;
    }

    // Validate password match
    if (formData.password !== formData.confirmPassword) {
        alert('Passwords do not match. Please try again.');
        document.getElementById('password').focus();
        clearPasswords();
        event.preventDefault(); // Prevent form submission
        return false;
    }

    return true; // Allow form submission
}

function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@byui\.edu$/;
    return regex.test(email);
}

function clearPasswords() {
    document.getElementById('password').value = '';
    document.getElementById('confirm_password').value = '';
    document.getElementById('password').focus();
}

function updateRangeValue(value) {
    document.getElementById('rangeValue').textContent = value;
}

function displayFormData() {
    const urlParams = new URLSearchParams(window.location.search);
    const formData = {};

    urlParams.forEach((value, key) => {
        formData[key] = value;
    });

    const formDataContainer = document.getElementById('formDataContainer');
    formDataContainer.innerHTML = `
        <p><strong>Username:</strong> ${formData.username || ''}</p>
        <p><strong>Password:</strong> ${formData.password || ''}</p>
        <p><strong>Confirm Password:</strong> ${formData.confirm_password || ''}</p>
        <p><strong>Email:</strong> ${formData.email || ''}</p>
        <p><strong>Page Rating:</strong> ${formData.rating || ''}</p>
    `;
}

window.onload = displayFormData;
