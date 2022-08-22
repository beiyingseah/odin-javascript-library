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

let title = form.elements.title.value;
let author = form.elements.author.value;
let pages = form.elements.pages.value;
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


/*** Library-Table interactivity ***/
/** Add & remove from library **/
// Create new book object with 'new' keyword
function createNewBook(title, author, pages, readStatus) {
    let newBook = new Book(title, author, pages, readStatus);
    return newBook;
}

function addBookToLibrary(title, author, pages, readStatus) {
    let newBook = createNewBook(title, author, pages, readStatus);
    console.log(newBook);
    let newIndex = library.unshift(newBook) - 1;
    console.log(library);
    console.log(newIndex);
    renderLibrary();
}

function removeBookFromLibrary() {
    //something pop from library
    //see YT vid @ 6:35
}

function renderLibrary() {
    tbody.innerHTML = ''; //reset innerHTML upon rendering (like a "table refresh")
    library.forEach((book) => {
        console.log(book.title);
        //let bookIndex = library.findIndex(book => book.title); 
        //console.log(bookIndex);
        let row = `
        <tr>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.pages}</td>
            <td><button class='readStatusBtn' type='button'>Read</button></td>
            <td><button class='deleteBookBtn' type='button'>Delete</button></td>
        </tr>
        `;
        tbody.insertAdjacentHTML('beforeend', row);

        // loop over rows and assign index to each via data-attribute
        let rows = document.querySelectorAll('tbody tr');
        for (i = 0; i < rows.length; i++) {
            rows[i].dataset.index = i;
            console.log(tbody.innerHTML)
          }

    });

}

//<tr data-index-number='1'>

/** Update library/table **/
function changeStatus(book) {

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
console.log('render library main');