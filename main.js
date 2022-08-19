
// MODAL FORM FUNCTIONALITY: ADD A NEW BOOK //
// Get modal element
let modal = document.getElementById('simpleModal');
// Get open modal button 
let addBookModalBtn = document.getElementById('addBookModalBtn');
// Get cancel button
let cancelBtn = document.getElementById('cancelBtn');

// Listen for open click
addBookModalBtn.addEventListener('click', openModal);
// Listen for cancel click
cancelBtn.addEventListener('click', closeModal);
// Listen for outside click
window.addEventListener('click', closeModalfromOutsideClick)

// Function to open modal 
function openModal() {
    modal.style.display = 'flex';
}

// Function to close modal
function closeModal() {
    modal.style.display = 'none';
}

// Function to close modal if user clicks outside of the form
function closeModalfromOutsideClick(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}


