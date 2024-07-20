document.addEventListener('DOMContentLoaded', function() {
    fetch('data/members.json')
        .then(response => response.json())
        .then(data => {
            const businessList = document.getElementById('business-list');
            data.forEach(business => {
                const businessDiv = document.createElement('div');
                businessDiv.classList.add('business-listing');
                businessDiv.innerHTML = `
                    <h2>${business.name}</h2>
                    <p>${business.address}</p>
                    <p>${business.phone}</p>
                    <p><a href="${business.website}">${business.website}</a></p>
                    <p><img src="images/${business.image}" alt="${business.name}"></p>
                    <p>${business.membership_level}</p>
                    <p class="contact-info">Contact: ${business.contact} | Email: <a href="mailto:${business.email}">${business.email}</a></p>
                `;
                businessList.appendChild(businessDiv);
            });
        })
        .catch(error => console.error('Error loading JSON:', error));

    const toggleButton = document.getElementById('toggleView');
    toggleButton.addEventListener('click', () => {
        const businessList = document.getElementById('business-list');
        if (businessList.classList.contains('grid-view')) {
            businessList.classList.remove('grid-view');
        } else {
            businessList.classList.add('grid-view');
        }
    });
});
