//Initially we are defining the standards for a book using an interface.
interface IBook {
    title: string,
    //This "readonly" thing makes the prop "private" which makes it impossible for
    //me to change the name to bob as i'm trying to do in line 22.
    readonly author: string, 
    published?: Date, //The quotationmark makes the property optional.
    pages?: number
}

//Then we are creating a book object.
let howToSurvive = {
    title: "How To survive FullStack Javascript", 
    author: "Christian Øst-Jacobsen",
    published: getDate(),
    pages: 2000
}
//Creating a function which takes our IBook as an argument and logs a string,
//with information about any book that follows our standard.
function getBook(book: IBook){
    //This line will fail because author is a readonly property.
    //console.log( `The book ${book.title}, was written by ${book.author="bob"}, the ${book.published}, and has ${book.pages} pages.`);
    console.log( `The book ${book.title}, was written by ${book.author}, the ${book.published}, and has ${book.pages} pages.`);
    
}
//Then we call the function to get a result out in the console.
getBook(howToSurvive);

//Now we are creating a book class (THE JAVA WAY ☕️😈)
class Book implements IBook{
    title: string;
    author: string; 
    published: Date; //We are cheating a bit, as we dont want another Date error.
    pages: number;

    constructor(book_title: string, book_author: string, release_date: Date, total_pages: number){
        this.title = book_title;
        this.author = book_author;
        this.published = release_date;
        this.pages = total_pages;
    }

    book_info(): void {
        console.log(`This book has ${this.pages} pages, is written by ${this.author}, is released: ${this.published} and its name is ${this.title}`);
        
    }
}
let Quack = new Book("QuackBook Pro", "Donald Quack", getDate(), 1234)

Quack.book_info();
//IT WORKS! We still have some problems with Date => String because we dont want
//the ugly time format Date() gives us - else everything is just fine. 

//This function gives us a clener format of the date of to day.
//TS will complain because we are converting the date into a string, 
//but the interface expects a Date. (No idea how to get the string back 
//to date format again - Maybe we'll figure it out someday.)
function getDate() {
    var now = new Date();
    var dd = now.getDate();
    var mm = now.getMonth()+1; //January is 0!
    var yyyy = now.getFullYear();
    var today = dd+'/'+mm+'/'+yyyy;
    return today
}