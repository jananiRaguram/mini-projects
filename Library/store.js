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