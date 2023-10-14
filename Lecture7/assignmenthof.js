const library = [
    { 
title: "The Great Gatsby", 
author: "F. Scott Fitzgerald", 
year: 1925,
pages: 180 
},
    {
title: "To Kill a Mockingbird",
author: "Harper Lee", 
year: 1960, 
pages: 281
},
    {
title: "1984", 
author: "George Orwell", 
year: 1949, 
pages: 328 
},
{
    title: "1947", 
    author: "George Orwell", 
    year: 1949, 
    pages: 250
},
    {
title: "Pride and Prejudice", 
author: "Jane Austen", 
year: 1813,
pages: 432 
},
{
    title: "Pride and honour", 
    author: "Jane Austen", 
    year: 1813,
    pages: 410 
    } 
]

 // 1. Total Number of Pages: Write a function getTotalPages that calculates and 
//     returns the total number of pages in the library.

//remember in Reduce function  first paramater in arrow function should be one which will accumulate value 
//like here sum
var totalNumberOfPages = library.reduce((sum, book) => sum + book.pages, 0);
console.log(totalNumberOfPages);

//2 List of Book Titles: Write a function getBookTitles that 
//  returns an array containing only the titles of the books in the library.
var bookTitle=library.map((book)=>book.title);
console.log(bookTitle);

//3.  Books Published After a Given Year: Write a function getBooksPublishedAfterYear(year) 
//  that takes a year as a parameter and returns an array containing the titles of books 
//  published after that year.

getBooksPublishedAfterYear=(years)=>{ return library.filter((book)=>book.year>years).map((book)=>book.title)};
// function  getBooksPublishedAfterYear(years){
//     var BooksPublishedTitleAfterYear=library.filter((book)=>book.year>years).map((book)=>book.title);
//     return BooksPublishedTitleAfterYear;
// }

console.log(getBooksPublishedAfterYear(1814));


//4. Average Number of Pages: Write a function getAveragePages that calculates 
//   and returns the average number of pages across all books in the library.

getAveragePages=()=>{return (library.reduce((sum,book)=>sum+book.pages,0))/library.length};
console.log(getAveragePages());

//5. Longest Book: Write a function getLongestBook that returns the title of the book with the most pages.

getLongestBookTitle=()=>{
    return library.filter((book)=>book.pages==library.
    reduce((maxi,book)=>{if(maxi<book.pages) return maxi=book.pages;},-1))
    .map((book)=>book.title)};
    console.log(getLongestBookTitle());
//or it can be simplified as 
var maxi=library.reduce((maxi,book)=>{if(maxi<book.pages) return maxi=book.pages;},-1);
var maxPageBookTitle=library.filter((book)=>book.pages==maxi)
                            .map((book)=>book.title);
console.log(maxPageBookTitle);

//6. Authors and Their Books: Write a function getAuthorsAndBooks that 
//   returns an object where the keys are author names and the values are arrays of 
//   book titles written by each author.
getAuthorsAndBooks=()=>
{
var authorsandBooks={};
library.forEach((book)=>
{ 
    var bookAuthor=book.author;
    if(authorsandBooks[bookAuthor]) authorsandBooks[bookAuthor].push(book.title);
    else authorsandBooks[bookAuthor]=[book.title];
}
)
return authorsandBooks;
}
console.log(getAuthorsAndBooks());

//7. Write a function getTotalPagesByAuthor that returns an object 
//   where the keys are author names and the values are the total number of 
//   pages of books written by each author.
getTotalPagesByAuthor=()=>
{
   var authorsandTotalPages={};
   library.forEach((book)=>
   {
    bookPages=book.pages;
    bookAuthor=book.author;
    if(authorsandTotalPages[bookAuthor])
    {
     var prevBookPages=authorsandTotalPages[bookAuthor];
     authorsandTotalPages[bookAuthor]=prevBookPages+bookPages;
    }
    else
    {
        authorsandTotalPages[bookAuthor]=bookPages;
    }
   })
 return authorsandTotalPages;
}
console.log(getTotalPagesByAuthor());

//8. Write a function getShortestBookByAuthor that returns an object 
//   where the keys are author names and the values are the titles 
//   of the shortest book written by each author.
getShortestBookByAuthor=()=>
{
    var ShortestBookByAuthor={};
    library.forEach((book)=>
    {
        var bookAuthor=book.author;
        var minPages=library.reduce((mini,book)=>
        {
        if(mini>book.pages && book.author==bookAuthor)  mini=book.pages;
        return mini;
        },Number.MAX_VALUE);
        var bookTitle=library.filter((book)=>book.pages==minPages).map(book=>book.title);
        ShortestBookByAuthor[bookAuthor]=bookTitle;
    })
    return ShortestBookByAuthor;
}

console.log(getShortestBookByAuthor());


