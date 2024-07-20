document.addEventListener("DOMContentLoaded", function() {
    fetch('new-ward-members.json')
        .then(response => response.json())
        .then(familyData => {
            const familyInfoDiv = document.getElementById('family-info');

            const familyName = document.createElement('h2');
            familyName.textContent = `Family Name: ${familyData.family_name}`;
            familyInfoDiv.appendChild(familyName);

            const movedDate = document.createElement('p');
            const formattedMovedDate = formatDateString(familyData.move_in_date);
            movedDate.textContent = `Moved to the neighborhood on: ${formattedMovedDate}`;
            familyInfoDiv.appendChild(movedDate);

            const numberPeople = document.createElement('p');
            numberPeople.textContent = `Number of People: ${familyData.number_of_people}`;
            familyInfoDiv.appendChild(numberPeople);

            const visited = document.createElement('p');
            visited.textContent = `Visited by Bishopric: ${familyData.visited_by_bishopric ? 'Yes' : 'No'}`;
            familyInfoDiv.appendChild(visited);

            const membersTitle = document.createElement('h3');
            membersTitle.textContent = 'Family Members:';
            familyInfoDiv.appendChild(membersTitle);

            const membersList = document.createElement('ul');
            familyData.family_members.forEach(member => {
                const listItem = document.createElement('li');
                const memberName = document.createElement('div');
                memberName.textContent = `Name: ${member.name}`;
                listItem.appendChild(memberName);

                const memberDetails = document.createElement('div');
                memberDetails.classList.add('member-details');
                const memberGender = document.createElement('p');
                memberGender.textContent = `Gender: ${member.gender}`;
                memberDetails.appendChild(memberGender);

                const formattedBirthdate = formatDateString(member.birthdate);
                const memberBirthdate = document.createElement('p');
                memberBirthdate.textContent = `Birthdate: ${formattedBirthdate}`;
                memberDetails.appendChild(memberBirthdate);

                listItem.appendChild(memberDetails);
                membersList.appendChild(listItem);
            });
            familyInfoDiv.appendChild(membersList);
        })
        .catch(error => console.error('Error fetching JSON:', error));
});

function formatDateString(dateString) {
    const [month, day, year] = new Date(dateString).toLocaleDateString("en-US").split("/");
    return `${month}/${day}/${year}`;
}
