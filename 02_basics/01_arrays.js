// Arrays

const myArr = [0, 1, 2, 3, 4, 5]
const superHeroes = ["Spiderman", "Batman", "Superman"]
const mixedData = [1, 2, 3, "Superman", "Batman"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[2]);

// Array Methods -->

// myArr.push(7) // push() to add value in existing array
// myArr.pop() // removes last added value in array

// myArr.unshift(9) // similar to push() but adds value at the 0th index.
// // Disadvantage --> not very optimal for larger datasets. (it shifts the values from their original index positions)
// myArr.shift() // removes the last added value from array by unshift()
// console.log(myArr);

// const newArr = myArr.join()
// console.log(typeof(newArr));


// slice, splice

console.log("A ", myArr); // A = [ 0, 1, 2, 3, 4, 5 ]

// slice --->

// 'slice' extract the values within a range from an array. ('value' of the end index of the range is not included)

const myn1 = myArr.slice(1,3)  
console.log(myn1);   // [ 1, 2 ]
console.log("B ", myArr);   // A = [ 0, 1, 2, 3, 4, 5 ]
// values of the original array is not changed by slice method.

// splice --->

// it also extracts the value from array but value of end index is included.
// Also it changes the value of original array.

const myn2 = myArr.splice(1,3)
console.log(myn2); // [ 1, 2, 3 ]
console.log("C ", myArr);  // A = [ 0, 4, 5 ]

// Difference btw SLICE & SPLICE -->
// 1. slice --> print value inside a range(value of end index not included.)
// 2. splice --> print values including the end index of range.
// 3. Main difference is 'slice' only extracts/prints the values from the array
//----------but 'splice' removes the values from the array.