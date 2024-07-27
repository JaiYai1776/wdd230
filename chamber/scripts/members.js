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


document.addEventListener('DOMContentLoaded', function() {
    fetch('data/members.json')
        .then(response => response.json())
        .then(members => {
            const qualifiedMembers = members.filter(member => member.membership_level === 'Silver' || member.membership_level === 'Gold');
            const selectedMembers = [];
            for (let i = 0; i < 3 && qualifiedMembers.length > 0; i++) {
                const index = Math.floor(Math.random() * qualifiedMembers.length);
                selectedMembers.push(qualifiedMembers.splice(index, 1)[0]);
            }
            const spotlightSection = document.getElementById('spotlight');
            selectedMembers.forEach(member => {
                const memberDiv = document.createElement('div');
                memberDiv.classList.add('business-listing'); // Reuse the styling class from the directory
                memberDiv.innerHTML = `
                    <h3>${member.name}</h3>
                    <p>${member.description || ''}</p>
                    <p>Contact: ${member.contact} | Phone: ${member.phone} | Email: <a href="mailto:${member.email}">${member.email}</a></p>
                    <a href="${member.website}" target="_blank">Visit Website</a>
                `;
                spotlightSection.appendChild(memberDiv);
            });
        })
        .catch(error => console.error('Error loading JSON:', error));
});
