let myLibrary = [];
let lib = document.querySelector('.lib');
let addbtn = document.querySelector('.newbook')
let formdisplay = document.querySelector('.form-popup');

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = () => {
    this.read ? 'already read' : 'not yet read';
}

function AddBook(title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);

}

function displayBooks() {
    //clear out existing dom entries
    let lis = document.querySelectorAll('li');
    lis.forEach((li) => {
        li.remove();
    })

    //iterate and create dom element for each book
    for (let i = 0; i < myLibrary.length; i++) {
        let dombook = document.createElement('li');
        dombook.setAttribute('title', myLibrary[i].title);
        dombook.setAttribute('author', myLibrary[i].author);
        dombook.setAttribute('pages', myLibrary[i].pages);
        dombook.setAttribute('read', myLibrary[i].read);

        //add remove button
        let removebtn = document.createElement('button');
        removebtn.setAttribute('class', 'delete');
        removebtn.textContent = 'X';
        dombook.appendChild(removebtn);

        //"remove book" button functionality
        removebtn.addEventListener('click', () => {
            myLibrary.splice(i, 1);
            dombook.remove();
        })

        //add info as text content
        let bookInfo = [myLibrary[i].title, myLibrary[i].author, myLibrary[i].pages]
        for (var tag of bookInfo) {
            let p = document.createElement('p');
            p.textContent = tag;
            dombook.appendChild(p);
        }

        //add read toggle button
        let readbtn = document.createElement('button');
        readbtn.setAttribute('class', 'readbtn');
        dombook.appendChild(readbtn);

        //read toggle button functionality
        readbtn.addEventListener('click', () => {
            myLibrary[i].read = !myLibrary[i].read
            dombook.setAttribute('read', myLibrary[i].read);
        })


        
        // insert new book before "add book" button
        lib.insertBefore(dombook, addbtn);
        

        console.log(myLibrary);
    }
}

//new book button
let newbook = document.querySelector('.newbook');
newbook.addEventListener('click', function(e) {
    formdisplay.style.display = "grid";
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
    formdisplay.style.display = "none";
    displayBooks();
})

let xbtn = document.querySelector('.x');
xbtn.addEventListener('click', () => {
    formdisplay.style.display = "none";
})
