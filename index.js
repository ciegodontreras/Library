const library = []; 


function Book (title, author, pages, read) {
    this.title = title; 
    this.author = author; 
    this.pages = pages; 
    this.read = read; 
    this.info = function() {
        return `${title} By ${author}, ${pages}pages, ${read}`;
    }; 
};

function addBookToLibrary() {
    library.push()
}

const addBtn = document.querySelector('.addBtn'); 

addBtn.addEventListener('click', openForm); 

function openForm() {
    let formHTML = document.querySelector('.bookForm'); 
    addBtn.remove(); 

    formHTML.innerHTML = `
        <form action="#" method="POST">
            <h1>Book Info</h1>
            <input type="text" placeholder="Title">
            <input type="text" placeholder="Author">
            <input type="text" placeholder="Pages">
            <label for="read" class="label"><input type="checkbox" id="read">Read</label>
            <button type="Submit">Add To Library</button>
        </form>
        `;
};
