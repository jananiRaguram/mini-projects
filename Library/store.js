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

    function addToLibrary(title, author, numPgs, hasRead){
        let newBook = new Book(title, author, numPgs, hasRead);
        mylibrary.push(newBook);
        // console.log(newBook.info());


        let table = document.getElementById('table');
        let newRow, newCell; 

        //with added book library size is 1 or 1 more than 4 (need a new row)
        if(mylibrary.length == 1 || mylibrary.length % 4 == 1){
            newRow = table.insertRow();
        }

        let rowNum = table.rows.length-1;
        
        newCell = table.rows[rowNum].insertCell();
        
        //put input details together 
        let bookDetails = document.createElement('ul');
        let details = document.createElement('li');

        //title
        details.textContent = title 
        bookDetails.appendChild(details);

        //author
        details = document.createElement('li');
        details.textContent = author;
        bookDetails.appendChild(details);

        //numpg
        details = document.createElement('li');
        details.textContent = numPgs;
        bookDetails.appendChild(details);

        //has read or not
        details = document.createElement('li');
        details.textContent = hasRead;
        bookDetails.appendChild(details);


        //details show in browser
        newCell.appendChild(bookDetails);

    }
    
    
    $('#inputBookInfo').on('click',function (e){
        // let title = document.getElementById("title").value;
        // let author = document.getElementById("author").value;
        // let numPgs = document.getElementById("numPgs").value
        // let hasRead = document.getElementById("hasRead").checked;
        let title = "rt";
        let author = "rt";
        let numPgs = "90";
        let hasRead = true;
        if(hasRead == true){
            hasRead = "Already Read";
        }else{
            hasRead = "TBR";
        }
        console.log(mylibrary);
        addToLibrary(title, author, numPgs, hasRead);
        // document.getElementById("form").style.visibility = "hidden";
    });
    
    
    
});

