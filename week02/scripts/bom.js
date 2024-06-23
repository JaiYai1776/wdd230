document.addEventListener('DOMContentLoaded', function() {
    const input = document.querySelector('#favchap');
    const button = document.querySelector('button');
    const list = document.querySelector('.list');

    // Function to add a chapter
    function addChapter() {
        if (input.value.trim() !== '') {
            const li = document.createElement('li');
            const deleteButton = document.createElement('button');
            
            li.textContent = input.value;
            deleteButton.textContent = '❌';
            
            li.append(deleteButton);
            list.append(li);
            
            deleteButton.addEventListener('click', function() {
                list.removeChild(li);
                input.focus();
            });
            
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
});
