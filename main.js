/** Initialise key global variables and states **/
const DEFAULT_DATA = [{title: 'Alice in Wonderland', author: 'Lewis Carroll', pages: 240, readStatus: true}, {title: 'Hard-Boiled Wonderland and the End of the World', author: 'Haruki Murakami', pages: 400, readStatus: false}];

const library = DEFAULT_DATA;


/** Book Object **/
// using class inheritance

class Book {
    constructor(title, author, pages, readStatus) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readStatus = readStatus;
    }
    toggleReadStatus() {
        this.readStatus = !this.readStatus;
    }
 }


/** Interactive variavbles **/ 
/* 
Get form elements
Note: Form only has client-side validation
 */
let addBookBtn = document.getElementById('addBookBtn');
let form = document.getElementById('modalForm');
let modal = document.getElementById('simpleModal');
let cancelBtn = document.getElementById('cancelBtn');
let title = form.elements.title.value;
let author = form.elements.author.value;
let pages = form.elements.pages.value;
let readStatusCheckbox = form.elements.readStatus.checked;

// Get table elements
let readStatusBtnList = document.getElementsByClassName('readStatusBtn');
let deleteBtnList = document.getElementsByClassName('deleteBookBtn');


/** Event listeners **/
/* For modal form */
addBookBtn.onclick = () => openModal();
cancelBtn.onclick = () => closeModal();
window.onclick = (e) => closeModalfromOutsideClick(e);

// For submit button
form.onsubmit = () => {
    addBookToLibrary(title, author, pages, readStatusCheckbox);
    closeModal();
}


/** Helper functions for library **/
// Create new book object with 'new' keyword
function createNewBook(title, author, pages, readStatus) {
    let newBook = new Book(title, author, pages, readStatus);
    return newBook;
}

/**  Dynamically add and remove row to a HTML table **/
function renderLibrary(newIndex) {
    return null; 
}

function addBookToLibrary(title, author, pages, readStatus) {
    let newBook = createNewBook(title, author, pages, readStatus);
    console.log(newBook);
    let newIndex = library.push(newBook) - 1;
    console.log(library);
    console.log(newIndex);
    renderLibrary(newIndex);
}

/* function removeBookFromLibrary(data-index-number) {
    renderLibrary();
}
*/

/** Helper functions for modal form **/
// Function to clear form 
function clearForm() {
    //resets form element's default values (in this case, as per the html, fields are empty strings by default)
    form.reset();
}

// Function to open modal 
function openModal() {
    modal.style.display = 'flex';
}

// Function to close modal
function closeModal() {
    modal.style.display = 'none';
    clearForm();
}

// Function to close modal if user clicks outside of the form
function closeModalfromOutsideClick(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}



/* MAIN */