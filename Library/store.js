let mylibrary = [];

function Book(title, author, numPgs, haveRead){
    this.title = title;
    this.author = author;
    this.numPgs = numPgs;
    this.haveRead = haveRead;
}

Book.prototype.info = function(){
        
    if(haveRead == false){
        return(title + " by " + author + ", " + numPgs + " pages, not read yet.");
    }else{
        return(title + " by " + author + ", " + numPgs + " pages, already read.");

    }
}

function addToLibrary(title, author, numPgs, haveRead){
    let newBook = new Book(title, author, numPgs, haveRead);
    mylibrary.push(newBook);
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