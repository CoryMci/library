let myLibrary = [];
let lib = document.querySelector('.lib');

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function() {
    let readstring = this.read ? 'already read' : 'not yet read'
    return (`${this.title} by ${this.author}, ${this.pages} pages, ${readstring}`);
}

function AddBook(title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);

}

function displayBooks() {
    let dombook = document.createElement('li');
    for (let i = 0; i < myLibrary.length; i++) {
        dombook.setAttribute('title', myLibrary[i].title);
        dombook.setAttribute('author', myLibrary[i].author);
        dombook.setAttribute('pages', myLibrary[i].pages);
        dombook.setAttribute('read', myLibrary[i].read);
        dombook.textContent = myLibrary[i].title;
        
        //add remove button
        let dombtn = document.createElement('button');
        dombtn.setAttribute('class', 'delete');
        dombtn.textContent = 'Remove Book';
        dombook.appendChild(dombtn);
        lib.appendChild(dombook);
        
        //remove button functionality
        dombook.addEventListener('click', () => {
            myLibrary.splice(i, 1);
            dombook.remove();
        })
        console.log(myLibrary);
    }
}

//new book button
let newbook = document.querySelector('.newbook');
newbook.addEventListener('click', function(e) {
    console.log('Bring up form!');
})

let form = document.querySelector('.form');
form.addEventListener('submit', (event) => {
    let readbox = document.querySelector('.read')
    let title = (form.elements['title'].value);
    let author = (form.elements['author'].value);
    let pages = (form.elements['pages'].value);
    let read = (readbox.checked);

    event.preventDefault();
    AddBook(title, author, pages, read);
    form.reset();
    displayBooks();
})

