const myLibrary = []; 

const addNewBook = document.querySelector('.addNewBook'); 
const bookTitle = document.querySelector('.bookTitle');
const bookAuthor = document.querySelector('.bookAuthor'); 
const bookPages = document.querySelector('.bookPages');
const libraryDisplay = document.querySelector('.libraryDisplay'); 


addNewBook.addEventListener('click', addBookToLibrary); 


function Book(title, author, pages, id) {
    this.title = bookTitle.value; 
    this.author = bookAuthor.value; 
    this.pages = bookPages.value; 
    this.id = crypto.randomUUID(); 
}

function addBookToLibrary(title, author, pages, id) {
    
    const newBook = new Book(title, author, pages, id)
    myLibrary.push(newBook); 

    console.log(myLibrary)

    const newCard = document.createElement('div');
    newCard.innerHTML = `<p>Title: ${bookTitle.value}</p>
    <p>Author: ${bookAuthor.value}</p>
    <p>Pages: ${bookPages.value}</p>`


    libraryDisplay.appendChild(newCard); 

    bookTitle.value = '';
    bookAuthor.value = ''; 
    bookPages.value = ''; 
}
