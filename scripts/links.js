const baseURL = "https://jaiyai1776.github.io/wdd230/";
const linksURL = "https://jaiyai1776.github.io/wdd230/data/links.json";

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data.weeks);
}

function displayLinks(weeks) {
  const listContainer = document.getElementById('activity-links');
  listContainer.innerHTML = ''; // Clear the container

  weeks.forEach(week => {
    const weekItem = document.createElement('li');
    weekItem.textContent = `${week.week}: `;

    week.links.forEach(link => {
      const anchor = document.createElement('a');
      anchor.href = `${baseURL}${link.url}`;
      anchor.textContent = link.title;
      weekItem.appendChild(anchor);

      // Add separator if it's not the last link
      if (week.links.indexOf(link) !== week.links.length - 1) {
        const separator = document.createTextNode(' | ');
        weekItem.appendChild(separator);
      }
    });

    listContainer.appendChild(weekItem);
  });
}

getLinks();
