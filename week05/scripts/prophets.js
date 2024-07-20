const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        displayProphets(data.prophets); // Display prophets after successful fetch
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

async function displayProphets(prophets) {
    try {
        prophets.forEach(prophet => {
            const card = createCard(prophet);
            cards.appendChild(card);
        });
    } catch (error) {
        console.error('Error displaying prophets:', error);
    }
}

function createCard(prophet) {
    const card = document.createElement('section');
    const fullName = document.createElement('h2');
    const portrait = document.createElement('img');

    fullName.textContent = `${prophet.name} ${prophet.lastname}`;

    portrait.src = prophet.imageurl;
    portrait.alt = `Portrait of ${prophet.name} ${prophet.lastname}`;
    portrait.loading = 'lazy';
    portrait.width = 340;
    portrait.height = 440;

    card.appendChild(fullName);
    card.appendChild(portrait);

    return card;
}

getProphetData();
