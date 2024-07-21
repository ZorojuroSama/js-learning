// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => {
//     console.log(item); // it will print the values
//     return item; // added this line to manually return the value.
// } )

// console.log(values); // output - undefined
// This happens because forEach function only iterates and print values but doesn't return them.
// To return the values we have to manually return them.
// Output will be the same i.e "undefined" after explicitly returning the value.

// That is why we use "filter" 

// ------------------------- filter -------------------------------

const MyNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums =  MyNums.filter( (num) => num > 5 ) // here in callbackfn. we write the condition without {} curly braces. 
// if we use {} braces then it will act like a block and behaves like a block scope. 
// console.log(newNums);

const newNums2 =  MyNums.filter( (num) => {
    return num > 5  // if we use {}, then we have to use return statement to return the value. Otherwise it will return an empty array. {} - block scope.
} ) 
// console.log(newNums2);

// const newNums3 = []

// MyNums.forEach( (num) => {
//     if (num > 5) {
//         newNums3.push(num)
//     }
// } )

// console.log(newNums3);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "Science"
})
//   console.log(userBooks);
// Get only the titles of the filtered books:
const bookTitles = userBooks.map((book) => book.title);

console.log(bookTitles);
