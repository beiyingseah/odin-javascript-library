# javascript-library

For my 8th project for The Odin Project, I build a small library app using Objects and Object Constructors. Local Storage is used for now. 

APPLYING MY LEARNINGS FROM TOP UP TILL NOW
- To translate non-technical briefs to technical specs based on concepts previously taught: form implementation, HTML table, and DOM Manipulation & Events 

TODOs
[Key functionality]
1. "Store books"
- Create books as objects 
- Add a function to the script ("not the constructor" -> Translation: define functions on the prototype of the Book object instead) that takes the user's input and store the new book objects into an array
2. Write a function that loops through the array and displays each book on the page
[Layout]
1. Display the cards in some sort of table, or each on their own 'card'
Tip: Manually add a few books to your array so you can see the display.
2. Add a 'NEW BOOK' button that brings up a form for users to input book details, e.g. title, page numbern, read status
3. Add buttons on each book's display 
(i) to remove the book from the library (table) -> need to associate DOM elements with the book objects in some way;
(ii) to change its 'read' status respectively -> "create a function that toggles a book's 'read' status on your 'Book' prototype instance" -> Translation: After creating the constructor for each of the book, we are able to edit the instance's prototype (which is a copy of the original prototype / function / parent object)

 
REFERENCES FOR THIS PROJECT
- Assets
[Icons]
 https://www.flaticon.com/free-icons/library