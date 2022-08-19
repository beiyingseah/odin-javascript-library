// Initialise key global variables
const myLibrary = [ {title: 'Alice in Wonderland', author: 'Lewis Carroll', pages: 240, readStatus: 'read'}, {}];

// the book constructor & prototype
function Book(title, author, pages, readStatus) {
   this.title = title;
   this.author = author;
   this.pages = pages;
   this.readStatus = readStatus;
}

Book.prototype.toggleReadStatus() {
    let a
}


/* Form-related events to capture */ 
// Note: Form only has client-side validation
let form = document.getElementById('modalForm');
let readStatus = updateReadStatus();

// listen to submit button clicked added
form.addEventListener('submit', function(e) {
    let title = form.elements['title']
    let author = form.elements['author']
    let pages = form.elements['page']
    let readStatus = 
})

// Create new book object with 'new' keyword
function createNewBook(title, author, pages, readStatus) {
    let book = new Book(title, author, pages, readStatus);
}

// Add new book object to library array
function addBookToArray(book) {

}

/* Dynamically add and remove row to a HTML table */
function addBookToTable(book) {

}

function removeBookFromArray(index) {

}

function removeBookFromTable(index) {

}


/* Modal form functionality for adding a new book */
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
    //resets form element's default values (in this case, as per the html, fields are empty strings by default)
    document.getElementById('modalForm').reset();
}

// Function to close modal if user clicks outside of the form
function closeModalfromOutsideClick(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}


/* MAIN */