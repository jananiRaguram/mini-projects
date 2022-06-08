let mylibrary = [];

function Book(title, author, numPgs, haveRead){
    this.title = title;
    this.author = author;
    this.numPgs = numPgs;
    this.haveRead = haveRead;
}

Book.prototype.info = function(){
        
    if(this.haveRead == false){
        return(this.title + "By " + this.author + "\nPgs" + this.numPgs + "\nnot read yet.");
    }else{
        return(this.title + "\nBy " + this.author + "\nPgs" + this.numPgs + "\nalready read.");

    }
}

function addToLibrary(title, author, numPgs, haveRead){
    let newBook = new Book(title, author, numPgs, haveRead);
    mylibrary.push(newBook);
    console.log(newBook.info());

    //show in browser
    let bookshelf = document.createElement("p");
    let bookDesc = document.createTextNode(newBook.info());
    bookshelf.appendChild(bookDesc);
    let myBookshelf = document.getElementById("myLibrary");
    myBookshelf.appendChild(bookshelf);
}

function inLibrary(){
    let i = 0;
    while(mylibrary.length != 0){
        mylibrary[i].info;
        i++;
    }
}

function showForm(){
    document.getElementById("form").style.display = "block";
}


function inputBookInfo(){
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let numPgs = document.getElementById("numPgs").value
    let hasRead = document.getElementById("hasRead").checked;
    addToLibrary(title, author, numPgs, hasRead);

}

