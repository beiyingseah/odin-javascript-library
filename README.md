# javascript-library

For my 8th project for The Odin Project, I build a small library app using Objects and Object Constructors. Local Storage is used for now. 

APPLYING MY LEARNINGS FROM TOP UP TILL NOW
- To translate non-technical briefs to technical specs based on concepts previously taught, such as CSS units ('em' and 'rem'), form components & validation, HTML table, and DOM Manipulation & Events 

TODOs
[Key functionality]
1. "Store books"
- Create books as objects 
- Add a function to the script ("not the constructor") -> Translation: define functions on the prototype of the Book object instead) that takes the user's input and store the new book objects into an array
2. Write a function that loops through the array and displays each book on the page
[Layout]
1. Display the cards in some sort of table, or each on their own 'card'
Tip: Manually add a few books to your array so you can see the display.
2. Add a 'NEW BOOK' button that brings up a form for users to input book details, e.g. title, page number, read status
3. Add buttons on each book's display 
(i) to remove the book from the library (table) -> need to associate DOM elements with the book objects in some way -> One simple way: give each of the book object instantiation a data-attribute that corresponds to the index of the library array
(ii) to change its 'read' status respectively -> "create a function that toggles a book's 'read' status on your 'Book' prototype instance" -> Translation: After creating the constructor for each of the book, we are able to edit the instance's prototype (which is a copy of the original prototype / function / parent object)

EXTRA CREDITS
- Designed with screen reader accessibility in mind (: e.g. form's fieldset & legend
- Followed material.io's colour palettes that meet accessibility standards 

 FUTURE VERSIONS
1. Add the active state, 'READING', with another field for start date.
2. Add another field for end date.
3. Since there are more "active" inputs, add an 'Edit' functionality. 
4a. Add Counter to table (BOOKS READ: 0, BOOKS UNREAD: 0, TOTAL BOOKS: 0)
4b. Add a 'Notes'/'Review' functionality to record thoughts about and/or learnings from books read
5. Improve toggle UI and do away with the 'Read?' label
https://www.tutorialstonight.com/css-toggle-switch-with-text

REFERENCES FOR THIS PROJECT
- Assets
[Icons]
 https://www.flaticon.com/free-icons/library
 [Colour palette]
 https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=64FFDA