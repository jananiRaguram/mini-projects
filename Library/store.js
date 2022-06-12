$(document).ready(function(){
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
        // console.log(newBook.info());
    
        //show in browser
        
        let i = 0;
        for(bookInfo in newBook){
            // console.log(bookInfo, newBook[bookInfo]);
            let book = document.createElement("div");
            let bookDesc = document.createElement("p");
            let text = document.createTextNode( newBook[bookInfo]);
            book.appendChild(bookDesc);
            bookDesc.appendChild(text);
            let myBookshelf = document.getElementById("myLibrary");
            myBookshelf.appendChild(book);
            
            if(i == 3){
                break;
            }
            i++;
        }
      
    }
    
    
    $('#addInfo').on('click',function (e){
        document.getElementById("form").style.display = "block";
    });
    
    $('#inputBookInfo').on('click',function (e){
        let title = document.getElementById("title").value;
        let author = document.getElementById("author").value;
        let numPgs = document.getElementById("numPgs").value
        let hasRead = document.getElementById("hasRead").checked;
        addToLibrary(title, author, numPgs, hasRead);
        document.getElementById("form").style.display = "none";
    });
    
    
    
});

