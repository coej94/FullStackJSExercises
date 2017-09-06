//Then we are creating a book object.
var howToSurvive = {
    title: "How To survive FullStack Javascript",
    author: "Christian Øst-Jacobsen",
    published: getDate(),
    pages: 2000
};
//Creating a function which takes our IBook as an argument and logs a string,
//with information about any book that follows our standard.
function getBook(book) {
    //This line will fail because author is a readonly property.
    //console.log( `The book ${book.title}, was written by ${book.author="bob"}, the ${book.published}, and has ${book.pages} pages.`);
    console.log("The book " + book.title + ", was written by " + book.author + ", the " + book.published + ", and has " + book.pages + " pages.");
}
//Then we call the function to get a result out in the console.
getBook(howToSurvive);
//Now we are creating a book class (THE JAVA WAY ☕️😈)
var Book = /** @class */ (function () {
    function Book(book_title, book_author, release_date, total_pages) {
        this.title = book_title;
        this.author = book_author;
        this.published = release_date;
        this.pages = total_pages;
    }
    Book.prototype.book_info = function () {
        console.log("This book has " + this.pages + " pages, is written by " + this.author + ", is released: " + this.published + " and its name is " + this.title);
    };
    return Book;
}());
var Quack = new Book("QuackBook Pro", "Donald Quack", getDate(), 1234);
Quack.book_info();
//This function gives us a clener format of the date of to day.
//TS will complain because we are converting the date into a string, 
//but the interface expects a Date. (No idea how to get the string back 
//to date format again - Maybe we'll figure it out someday.)
function getDate() {
    var now = new Date();
    var dd = now.getDate();
    var mm = now.getMonth() + 1; //January is 0!
    var yyyy = now.getFullYear();
    var today = dd + '/' + mm + '/' + yyyy;
    return today;
}
//# sourceMappingURL=Ex3.js.map