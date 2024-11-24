// Select the note list and input box elements
const noteList = document.getElementById('note-list');
const textBox = document.getElementById('text-box');
const noteInput = document.getElementById("note-list");

// Function to add notes
function addNotes() {
    const noteText = textBox.value.trim();
    
    // Assuming noteText is the value of an input field
   
    if (noteText === '') {
        noteInput.placeholder = "Notes should not be empty"; // Set placeholder text
        noteInput.classList.add("input-error"); // Add a class to style the input field if needed
        return;
    }

    if (noteText !== '') {
        noteInput.placeholder = "Enter your note here"; // Reset placeholder
        noteInput.classList.remove("input-error"); // Remove error styling
    }

    // Create a new list item and add text
    const li = document.createElement('li');
    li.textContent = noteText;
    
    // Add a close button to each note
    const deleteBtn = document.createElement('span');
    deleteBtn.textContent = "✖";
    deleteBtn.className = "close";
    deleteBtn.onclick = () => li.remove(); // Remove note on delete button click
    
    // Append delete button to the list item
    li.appendChild(deleteBtn);

    // Add the new note to the list and clear the input field
    noteList.appendChild(li);
    textBox.value = '';

    // Add event listener to mark the note as complete on click
    li.onclick = function () {
        li.classList.toggle('checked');
    };
}

// Optional: Add 'Enter' key functionality to add notes
textBox.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        addNotes();
    }
});

//Contact Form

document.querySelector('.contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from refreshing the page
    
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;

    const confirmationMessage = document.createElement('p');
    confirmationMessage.textContent = `Thank You !! ${name}, Your message has been sent Successfully..!`;
    confirmationMessage.style.color= 'green';
    confirmationMessage.style.fontWeight= 'bold';
    confirmationMessage.style.marginTop= '10px';

    const form = document.querySelector('.contact-form');
    if(!document.querySelector('.confirmationMessage')){
        confirmationMessage.className = 'confirmation-message';
        form.appendChild(confirmationMessage);
    }
    form.reset();
  });
  
