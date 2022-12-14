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
 
/** Initialise key global variables and states **/
const BOOK_0 = new Book('Alice in Wonderland', 'Lewis Carroll', 240, true);
const BOOK_1 = new Book('Hard-Boiled Wonderland and the End of the World', 'Haruki Murakami', 400, false);

const DEFAULT_DATA = [BOOK_0, BOOK_1];
const library = DEFAULT_DATA;


/*** Interactive variavbles ***/ 
/* 
Get form elements
Note: Form only has client-side validation
 */
let addBookBtn = document.getElementById('addBookBtn');
let form = document.getElementById('modalForm');
let modal = document.getElementById('simpleModal');
let cancelBtn = document.getElementById('cancelBtn');
let submitBtn = document.getElementById('submitBtn');

let titleField = form.elements.title;
let authorField = form.elements.author;
let pagesField = form.elements.pages;
let readStatusCheckboxField = form.elements.readStatus;

let title = titleField.value;
let author = authorField.value;
let pages = pagesField.value;
let readStatusCheckbox = form.elements.readStatus.checked;

// Get table elements
let tbody = document.querySelector('tbody'); 

/*** Event listeners ***/
/* For modal form */
addBookBtn.onclick = () => openModal();
cancelBtn.onclick = () => closeModal();
window.onclick = (e) => closeModalfromOutsideClick(e);

titleField.oninput = (e) => {
    title = e.target.value;
}

authorField.oninput = (e) => {
    author = e.target.value;
}

pagesField.oninput = (e) => {
    pages = e.target.value;
}

readStatusCheckboxField.oninput = () => {
    readStatusCheckbox = !readStatusCheckbox;
}


// For submit button
form.onsubmit = (e) => {
    e.preventDefault()
    addBookToLibrary(title, author, pages, readStatusCheckbox);
    closeModal();
}

// For 'delete book' button
tbody.addEventListener('click', removeBookFromLibrary);

// For 'change read status' button
tbody.addEventListener('click', changeReadStatus);

/*** Library-Table interactivity ***/
/** Add & remove from library **/
// Create new book object with 'new' keyword
function createNewBook(title, author, pages, readStatus) {
    let newBook = new Book(title, author, pages, readStatus);
    return newBook;
}

function addBookToLibrary(title, author, pages, readStatus) {
    let newBook = createNewBook(title, author, pages, readStatus);
    library.unshift(newBook);
    //console.log(newIndex);
    renderLibrary();
}

// respond to click events that has the 'deleteBookBtn' class (that has been dynamically generated
function removeBookFromLibrary(e) {
    if (e.target.classList.contains('deleteBookBtn')) {
        let index = e.target.parentNode.parentNode.dataset.index
        library.splice(index, 1);
        renderLibrary();
    }
}


function renderLibrary() {
    tbody.innerHTML = ''; //reset innerHTML upon rendering (like a "table refresh")
    library.forEach((book) => {
        //let bookIndex = library.findIndex(book => book.title); 
        //console.log(bookIndex);

        // assign readStatus text
        let readStatusText = '';
        if (book.readStatus) {
            readStatusText = 'read';
        }
        else {
            readStatusText = 'not read'
        }
        
        let row = `
        <tr>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.pages}</td>
            <td><button class='readStatusBtn' type='button'>${readStatusText}</button></td>
            <td><button class='deleteBookBtn' type='button'>Delete</button></td>
        </tr>
        `;
        tbody.insertAdjacentHTML('beforeend', row);

        // loop over rows and assign index to each via data-attribute
        let rows = document.querySelectorAll('tbody tr');
        for (i = 0; i < rows.length; i++) {
            rows[i].dataset.index = i;
          }
        let test = document.querySelectorAll('[data-index]');
    });
}

/** Update library/table **/
function changeReadStatus(e) {
    if (e.target.classList.contains('readStatusBtn')) {
        let index = Number(e.target.parentNode.parentNode.dataset.index);
        let readStatusText = e.target.innerHTML;
        library[index].toggleReadStatus();

        if (readStatusText === 'read') {
            readStatusText = 'not read';
        }
        else if (readStatusText === 'not read') {
            readStatusText = 'read';
        }
        renderLibrary();
    }
}


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
        clearForm();
    }
}


/* MAIN */
renderLibrary();