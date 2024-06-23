document.addEventListener('DOMContentLoaded', function() {
    const input = document.querySelector('#favchap');
    const button = document.querySelector('button');
    const list = document.querySelector('.list');

    // Declare an array named chaptersArray and assign it to the results of a defined function named getChapterList
    // Add a compound OR condition to assign it an empty array in case this is the user's first visit or if the localStorage item is missing
    let chaptersArray = getChapterList() || [];

    // Populate the displayed list of chapters
    chaptersArray.forEach(chapter => {
        displayList(chapter);
    });

    // Function to add a chapter
    function addChapter() {
        if (input.value.trim() !== '') {
            const chapter = input.value.trim();
            displayList(chapter);
            chaptersArray.push(chapter);
            setChapterList();
            input.value = '';
            input.focus();
        } else {
            input.focus();
        }
    }

    // Click event listener for the button
    button.addEventListener('click', addChapter);

    // Keydown event listener for the input field
    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            addChapter();
        }
    });

    // Function to display a chapter in the list
    function displayList(item) {
        let li = document.createElement('li');
        let deleteButton = document.createElement('button');
        li.textContent = item;
        deleteButton.textContent = '❌';
        deleteButton.classList.add('delete');
        li.append(deleteButton);
        list.append(li);
        deleteButton.addEventListener('click', function() {
            list.removeChild(li);
            deleteChapter(li.textContent);
            input.focus();
        });
    }

    // Function to set the localStorage item
    function setChapterList() {
        localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
    }

    // Function to get the localStorage item
    function getChapterList() {
        return JSON.parse(localStorage.getItem('myFavBOMList'));
    }

    // Function to delete a chapter from the list and update localStorage
    function deleteChapter(chapter) {
        chapter = chapter.slice(0, chapter.length - 1);
        chaptersArray = chaptersArray.filter(item => item !== chapter);
        setChapterList();
    }
});
