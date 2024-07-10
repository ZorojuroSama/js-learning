const name = "Shubham"
const repoCount = 50

// console.log(name + repoCount + "Value"); // old method to print and concatinate a string. ## Not recommended as modern syntax.

// We use ` ` (backticks) for string interpolation. Modern syntax.
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}.`);

// another way to declare strings:

const MyName = new String("ShubhamRaj") // we use "new" keyword which uses objects in javascript.
// it is used because it treats string as an object which unlocks multiple "methods/functions" to use with the string.

// console.log(MyName.toUpperCase());
// console.log(MyName.charAt(4));
// console.log(MyName.length);
console.log(MyName.indexOf("a"));
console.log(MyName.indexOf("a", MyName.indexOf("a") + 1)); // to find the index of 'a' for the second occurrence.
const newString = MyName.substring(0,5)
console.log(newString);

const anotherString = MyName.slice(-8,5) // we can use -ve values in slice method but not in substring method.
console.log(anotherString);

// ShubhamRaj